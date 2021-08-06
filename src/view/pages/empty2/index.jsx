import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function index() {
  const [data, Data] = useState({
    series: [42, 47, 52, 58, 65],
    options: {
      chart: {
        width: 540,
        type: 'polarArea'
      },
      labels: ['Phone', 'TV', 'Monitor', 'Keyboard', 'Laptop'],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          }
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      }
    }
  })
  return (
    <>
      <div className="zg-d-flex-center ant-row-center">
        <div className="mixed-chart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="polarArea"
            width={540}
          />
        </div>
      </div>
    </>
  )
}
