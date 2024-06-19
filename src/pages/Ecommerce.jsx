import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold'>
                  Earnings
              </p>
              <p className='text-2xl'>
                $63,448.78
              </p>
            </div>

          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
            />

          </div>
        </div>

        <div className='flex gap-1 m-3 flex-wrap justify-center items-center'>
            {earningData.map((item) => (
              <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl md:w-56  '>
                  <button type='button' style={{color: item.iconColor, background: item.iconBg}} className='text-2xl rounded-full p-4 opacity-0.9 hover:drop-shadow-xl'>
                    {item.icon}

                  </button>
                  <p className='mt-3'>
                    <span className='text-xl font-semibold'>
                        {item.amount}
                    </span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>
                      {item.percentage}
                    </span>
                  </p>
                  <p className='mt-1 text-sm text-gray-400'>
                    {item.title}
                  </p>
              </div>
            ))}
        </div>
      </div>
            <div>
              
            </div>
    </div>
  )
}

export default Ecommerce
// 1:48:30