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
                                    new TableCell({ children: [new Paragraph("Grosor encontrado por IA")], width: { size: 33.3, type: WidthType.PERCENTAGE } }),
                                    new TableCell({ children: [new Paragraph(results.width.toString() + " mm")] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Ecogenicidad encontrada por IA")], width: { size: 33.3, type: WidthType.PERCENTAGE } }),
                                    new TableCell({ children: [new Paragraph(results.echogenicity)] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph("Estimación de riesgo de crecimiento a 5 años")], width: { size: 33.3, type: WidthType.PERCENTAGE } }),
                                    new TableCell({ children: [new Paragraph(`${results.percentage}%`)] }),
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
                                    new TableCell({ children: [new Paragraph({ text: "Características", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: "Observaciones", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: "Resultados", alignment: "center" })] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph({ text: "T (Thickness/Grosor)", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: "Observe el ultrasonido. ¿Observa usted un grosor mayor a 2mm?", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: results.checkboxes.tr1 ? "Sí" : "No", alignment: "center" })] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph({ text: "F (Fluid/Presencia de líquido)", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: "Observe el OCT macular y sobre la lesión. ¿Observa líquido subretiniano o desprendimiento seroso de retina?", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: results.checkboxes.tr2 ? "Sí" : "No", alignment: "center" })] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph({ text: "S (Symptoms/Síntomas)", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: "Use la Cartilla de Snellen. ¿Su paciente tiene una visión de 20/60 o peor? ¿Presenta metamorfopsias?", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: results.checkboxes.tr3 ? "Sí" : "No", alignment: "center" })] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph({ text: "O (Orange pigment/Pigmento naranja)", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: "Observe la autofluorescencia. ¿Observa usted moteado hiper-autofluorescente?", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: results.checkboxes.tr4 ? "Sí" : "No", alignment: "center" })] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph({ text: "M (Melanoma hollow/Hipoecogenicidad)", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: "Observe el ultrasonido. ¿La lesión tiene un centro hipo-ecogénico?", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: results.checkboxes.tr5 ? "Sí" : "No", alignment: "center" })] }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({ children: [new Paragraph({ text: "DiM (Diameter/Diámetro)", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: "Observe la fotografía de fondo de ojo. ¿La lesión mide más de 2 diámetros de disco o 5mm?", alignment: "center" })] }),
                                    new TableCell({ children: [new Paragraph({ text: results.checkboxes.tr6 ? "Sí" : "No", alignment: "center" })] }),
                                ],
                            }),
                        ],
                        width: {
                            size: 100,
                            type: WidthType.PERCENTAGE
                        },
                    }),
                ],
            },
        ],
    });
    
    Packer.toBlob(doc).then((docBlob) => {
        saveAs(docBlob, "Resultados.docx");
    });
};
