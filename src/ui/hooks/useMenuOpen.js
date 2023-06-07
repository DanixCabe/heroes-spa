
import { useEffect, useState } from 'react';

export const useMenuOpen = () => {
    
    const [changeMobMenu, setChangeMobMenu] = useState(false)
    const [openSetting, setOpenSetting] = useState(false)

    const toggleMenu = () => {
        setChangeMobMenu(!changeMobMenu)
    }

    const toggleSettings = () =>{
        setOpenSetting(!openSetting)
    }

    useEffect( () =>{
        
    }, [] ) 

    return{
        changeMobMenu,
        toggleMenu,
        openSetting,
        toggleSettings,
    }
}

