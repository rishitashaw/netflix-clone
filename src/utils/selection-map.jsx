export default function selectionMap({ series, films }) {
  return {
    series: [
      {
        title: "Documentries",
        data: series.filter((item) => item.genre === "documentries"),
      },
    ],
  };
}
