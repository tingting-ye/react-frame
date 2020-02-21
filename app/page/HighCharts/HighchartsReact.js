import React from 'react';

export default class HighchartsReact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    const highcharts = this.props.highcharts || window.Highcharts;
    this.chart = highcharts[this.props.constructorType || 'chart'](
      this.container.current,
      this.props.options,
      this.props.callback ? this.props.callback : undefined
    );
  }

  componentDidUpdate() {
    if (this.props.allowChartUpdate !== false) {
      this.chart.update(
        this.props.options,
        ...(this.props.updateArgs || [true, true])
      );
    }
  }

  componentWillUnmount() {
    // Destroy chart
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  render() {
    // Create container for the chart
    return React.createElement('div', { ref: this.container });
  }
}
