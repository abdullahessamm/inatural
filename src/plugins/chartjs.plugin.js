export const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { ctx, chartArea } = chart;
    const { width, height } = chartArea;

    const config = chart.options.plugins.centerText;
    if (!config || !config.lines) return;

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const centerX = width / 2;

    const lineHeight = config.lineHeight || 26;
    const totalTextHeight =
      (config.lines.length - 1) * lineHeight;

    const centerY =
      (config.baseY ?? height / 2) - totalTextHeight / 2;

    config.lines.forEach((line, index) => {
      ctx.font = line.font || 'bold 24px Calibri';
      ctx.fillStyle = line.color || '#000';

      const y = centerY + index * lineHeight;
      ctx.fillText(line.text, centerX, y);
    });

    ctx.restore();
  }
};
