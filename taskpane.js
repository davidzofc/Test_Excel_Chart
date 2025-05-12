Office.onReady(() => {
  // Office is ready
});

async function formatChart() {
  await Excel.run(async (context) => {
    const chart = context.workbook.getSelectedChart();
    chart.title.text = "Formatted by Add-in";
    chart.format.fill.setSolidColor("lightblue");
    chart.dataLabels.showValue = true;
    chart.dataLabels.font.size = 14;
    await context.sync();
  });
}
