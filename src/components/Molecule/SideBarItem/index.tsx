import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'
import styled from '@emotion/styled'
import React, { ReactElement } from 'react'

const SideItemBox = styled(Box)`
    :hover {
        background-color:lightgray;
    }
`

const SideBarItem = ({ active, itemName, itemIcon }: { active: boolean, itemName: string, itemIcon: ReactElement }) => {
    return (
        <SideItemBox padding='10px 20px' width='100%' backgroundColor={active ? "lightgray" : "transparent"}
            borderRadius={10}
            m='30px'
            style={{ cursor: "pointer", fontSize: "16px", color: 'white', display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px" }}>
            {itemIcon}
            <Text color='black' fontSize='16px'>
                {itemName}
            </Text>
        </SideItemBox>
    )
}

export default SideBarItem
