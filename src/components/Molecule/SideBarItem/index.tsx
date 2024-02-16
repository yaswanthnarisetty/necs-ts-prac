import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'
import React, { ReactElement } from 'react'

const SideBarItem = ({ active, itemName, itemIcon }: { active: boolean, itemName: string, itemIcon: ReactElement }) => {
    return (
        <Box padding='10px 20px' width='auto' backgroundcolor={active ? "#2f2e369e" : "transparent"}
            borderradius='10px'
            margin='10px'
            gap='5px'
            style={{ fontSize: "16px", color: 'white', display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            {itemIcon}
            <Text color='white' fontSize='16px'>
                {itemName}
            </Text>
        </Box>
    )
}

export default SideBarItem
