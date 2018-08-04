import React from 'react';
import { Paper, Tabs, Tab, withWidth} from '@material-ui/core';

const Footer = ({categories, category, onSelect, width}) => {
  const index = category
  ? categories.findIndex(el => el === category) + 1
  : 0

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={(e, index) => {
          onSelect(index === 0 ? '' : categories[index - 1])
        }}
        indicatorColor="primary"
        textColor="primary"
        centered={width !== 'xs'}
        scrollable={width === 'xs'}
        scrollButtons="on"
      >
        <Tab label={"All"} />
        {categories.map((category)=>
          <Tab key={category} label={category} />
        )}
      </Tabs>
    </Paper>
  )
}

export default withWidth()(Footer);
