import { saveAs } from "file-saver";
import { Document, ImageRun, Packer, Table, TableRow, TableCell, Paragraph, TextRun, WidthType } from "docx";

export const generateFromUrl = async (results: any) => {
    const getImage = async (url: string) => {
        const response = await fetch(url);
        return await response.blob();
    };

    const logo = await getImage(process.env.REACT_APP_ECI_LOGO ? process.env.REACT_APP_ECI_LOGO : "");

    const newResults = {
        image: await getImage(results.image),
        mask: await getImage(results.mask),
        overlay: await getImage(results.overlay),
    };

    const imageCellTemplate = async (imageTable: any) => new TableCell({
        children: [
            new Paragraph({
                children: [
                    new ImageRun({
                        type: 'jpg',
                        data: await imageTable.arrayBuffer(),
                        transformation: {
                            width: 200,
                            height: 125,
                        },
                    }),
                ]
            })
        ], width: { size: 33.3, type: WidthType.PERCENTAGE }
    })

    const date = new Date();
    const formatedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    const doc = new Document({
        sections: [
            {
                children: [
                    new Paragraph({
                        children: [
                            new ImageRun({
                                type: 'png',
                                data: await logo.arrayBuffer(),
                                transformation: {
                                    width: 219,
                                    height: 62,
                                },
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "\n",
                            },)
                        ]
                    }),
                    new Table({
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Fecha del reporte")], width: { size: 33.3, type: WidthType.PERCENTAGE } }),
                                    new TableCell({ children: [new Paragraph(formatedDate)] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Grosor")] }),
                                    new TableCell({ children: [new Paragraph(results.width.toString() + " mm")] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Ecogenicidad")] }),
                                    new TableCell({ children: [new Paragraph(results.echogenicity)] }),
                                ],
                            }),
                        ],
                        width: {
                            size: 100,
                            type: WidthType.PERCENTAGE
                        },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "\n",
                            },)
                        ]
                    }),
                    new Table({
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Imagen Original")] }),
                                    new TableCell({ children: [new Paragraph("Máscara Generada")] }),
                                    new TableCell({ children: [new Paragraph("Melanoma Encontrado")] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    await imageCellTemplate(newResults.image),
                                    await imageCellTemplate(newResults.mask),
                                    await imageCellTemplate(newResults.overlay),
                                ],
                            }),
                        ],
                        width: {
                            size: 100,
                            type: WidthType.PERCENTAGE
                        },
                    })
                ],
            },
        ],
    });

    Packer.toBlob(doc).then((docBlob) => {
        saveAs(docBlob, "Resultados.docx");
    });
};
