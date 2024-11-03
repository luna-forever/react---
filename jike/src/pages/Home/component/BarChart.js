import { useEffect, useRef } from "react"
import * as echarts from "echarts"

const Barchart = ({ xData, sData, style = { width: '400px', height: '300px' } }) => {
  const chartRef=useRef(null)
  useEffect(()=>{
    const mychart=echarts.init(chartRef.current)
    const option = {
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: sData,
          type: 'bar'
        }
      ]
    }
    mychart.setOption(option)
  },[sData, xData])
  return <div ref={chartRef} style={style}></div>
}
export default Barchart