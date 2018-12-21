export function chartWrapper(H) {
  H.wrap(H.Pointer.prototype, 'normalize', function(proceed) {
      var e = arguments[1],
          chartPosition = arguments[2],
          ePos,
          containerSize = this.chart.container.clientWidth;

      ePos = e.touches ?
          (e.touches.length ? e.touches.item(0) : e.changedTouches[0]) :
          e;

      if (!chartPosition) {
          this.chartPosition = chartPosition = H.offset(this.chart.container);
      }

      return H.extend(e, {
          chartX: Math.round(ePos.pageX/1 - chartPosition.left ),
          chartY: Math.round(ePos.pageY/1 - chartPosition.top)
      });
  });
}
