import styled from '@emotion/styled';
import { FormControlLabel, SwitchProps, Switch } from '@mui/material';
import Image from 'next/image';

export default function SourceItem() {
  return (
    <div className='flex justify-between border border-[rgb(47,47,51)] items-center p-2  rounded-2xl shadow-custom'>
        <div className='w-9 rounded-full h-9 bg-white'>
            <Image 
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} 
                src="/images/websites/ign-logo-icon.png"                    
                alt="IGN Logo"
            />
        </div>
        <div className="text-2xl">
            IGN
        </div>
        <div>
        <FormControlLabel
            sx={{marginRight: 0}}
            control={<IOSSwitch className="mr-0" sx={{ marginLeft: 0 }} defaultChecked />}
            label=""
        />
        </div>
    </div>
  )
}

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" sx={{marginRight: 0}} disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#3F97E9',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: 'gray'
            
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor:'#39393D',
      opacity: 1,
    },
  }));