import { BellIcon, CalendarIcon, ChatIcon, DeleteIcon, EditIcon, TimeIcon } from "@chakra-ui/icons";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
    Input,
    Box,
    Button,
  } from "@chakra-ui/react";
  
type Eventprops = {
    event:string;
    date:string;
    starttime:string;
    endtime:string;
    eventmore:string;
  };


const detail = (props: Eventprops) => {
    return(
        <Popover>
        <PopoverTrigger>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>予定の詳細
              <Button  left="125px" bottom="7px" backgroundColor="white" width="25px" height="30px"><EditIcon height="13px" backgroundColor="white"></EditIcon></Button>
              <Button  left="125px" bottom="7px" backgroundColor="white" width="25px" height="30px"><DeleteIcon height="13px" backgroundColor="white"></DeleteIcon></Button>
            </PopoverHeader>
            <PopoverCloseButton height="25px" width="30px" left="285px"/>
            <PopoverBody>
    
              
              <BellIcon position="relative" width="20px" height="20px" left="5px" top="5px"></BellIcon>
              <Input id="event" value={props.event} width="250px" left="20px" top="5px" />
    
              <CalendarIcon position="relative" width="15px" height="15px" top="60px" right="263px"></CalendarIcon>
              <Input id="event-day"  value={props.date}  top="20px" width="250px" left="40px"/>
    
              <TimeIcon position="relative" width="15px" height="15px" top="80px" right="243px"></TimeIcon>
              <Input id="start-time" value={props.starttime}  width="75px" top="42px"left="40px"/>
              <Box width="75px" position="relative" left="160px" top="10px">-</Box>
              <Input id="end-time" value={props.endtime} width="75px" left="215px" bottom="20px"/>
    
              <ChatIcon position="relative" width="15px" height="15px" top="30px" right="68px"></ChatIcon>
              <Input id="event-moreinfo" value={props.eventmore} type="text" defaultValue="" height="70px" width="250px" left="40px" />
    
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover> 
    )
}

const Data = (props: Eventprops) => (
      <button className="newevent" onClick={() => detail}>
        {props.event}
      </button>
)

export default Data;