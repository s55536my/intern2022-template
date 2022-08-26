import { CheckIcon, DeleteIcon, Icon, EditIcon } from "@chakra-ui/icons";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Box,
  Button,
  IconButton,
  Input,
  useDisclosure,
  Stack,
  HStack,
} from "@chakra-ui/react";

import type { Database, SquareState } from "~/my-app";
import { useState } from "react";
import { BsFonts, BsCardText } from "react-icons/bs";
import { RiCalendar2Fill } from "react-icons/ri";
import { BiTime } from "react-icons/bi";

type Eventprops = {
  month: number;
  year: number;
  day: SquareState;
  setsavedata: React.Dispatch<React.SetStateAction<Database[]>>;
  savedata: Database[];
};

const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
  event.stopPropagation();
};

let sliceyear;
let slicemonth;
let sliceday;

const Data = (props: Eventprops) => {
  const [check, setCheck] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [eventmore, setEventmore] = useState("");

  let checknumber = 0;
  const del = () => {
    props.setsavedata(
      props.savedata.filter((same, index) => index !== checknumber)
    );
  };

  if (props.savedata === undefined) {
    return <></>;
  }
  const res = props.savedata.map((data, index) => {
    const chenge = () => {
      setCheck(1);
      setEvent(data.event);
      setDate(data.date);
      setStarttime(data.starttime);
      setEndtime(data.endtime);
      setEventmore(data.eventDetail);
    };

    const chenge2 = () => {
      setCheck(0);
    };

    const handlesave = () => {
      props.setsavedata(
        props.savedata.map((add, index) =>
          index === checknumber
            ? {
                event: event,
                date: date,
                starttime: starttime,
                endtime: endtime,
                eventDetail: eventmore,
              }
            : add
        )
      );
    };

    sliceyear = data.date.substring(0, 4);
    slicemonth = data.date.substring(7, 5);
    sliceday = data.date.substring(8);

    if (
      Number(sliceyear) === props.year &&
      Number(slicemonth) === props.month &&
      Number(sliceday) === Number(props.day)
    ) {
      checknumber = index;
      return (
        <div>
          <div onClick={stopPropagation}>
            <Popover isOpen={isOpen && check === 0}>
              <PopoverTrigger>
                <button className="newevent" onClick={onOpen}>
                  {data.event}
                </button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    予定の詳細
                    <Button
                      left="125px"
                      bottom="7px"
                      backgroundColor="white"
                      width="25px"
                      height="30px"
                      onClick={chenge}
                    >
                      <EditIcon></EditIcon>
                    </Button>
                    <Button
                      left="125px"
                      bottom="7px"
                      backgroundColor="white"
                      width="25px"
                      height="30px"
                      onClick={del}
                    >
                      <DeleteIcon
                        height="13px"
                        backgroundColor="white"
                      ></DeleteIcon>
                    </Button>
                  </PopoverHeader>
                  <PopoverCloseButton
                    height="25px"
                    width="30px"
                    left="285px"
                    onClick={onClose}
                  />
                  <PopoverBody>
                    <Stack spacing={4}>
                      <HStack>
                        <Icon w={6} h={6} as={BsFonts}></Icon>
                        <Box maxWidth="270px" id="event">
                          {data.event}
                        </Box>
                      </HStack>

                      <HStack spacing={2}>
                        <Icon w={6} h={5} as={RiCalendar2Fill}></Icon>
                        <Box id="event">{data.date}</Box>
                      </HStack>

                      <HStack spacing={2}>
                        <Icon w={6} h={5} as={BiTime}></Icon>
                        <Box>{data.starttime}</Box>
                        <Box>~</Box>
                        <Box>{data.endtime}</Box>
                      </HStack>

                      <HStack spacing={2}>
                        <Icon w={6} h={5} as={BsCardText}></Icon>
                        <Box maxWidth="270px">{data.eventDetail}</Box>
                      </HStack>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
          <div onClick={stopPropagation}>
            <Popover isOpen={isOpen && check === 1}>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    予定の編集
                    <IconButton
                      position="absolute"
                      variant="outline"
                      aria-label="Check"
                      icon={<CheckIcon />}
                      height="25px"
                      width="25px"
                      left="240px"
                      top="5px"
                      onClick={() => {
                        handlesave(), onClose(), chenge2();
                      }}
                    />
                  </PopoverHeader>
                  <PopoverCloseButton
                    onClick={() => {
                      onClose(), chenge2();
                    }}
                  />
                  <PopoverBody height="210px">
                    <Input
                      id="event"
                      value={event}
                      width="290px"
                      onChange={(e) => setEvent(e.target.value)}
                    />

                    <Input
                      id="date"
                      type="date"
                      width="220px"
                      top="10px"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    />

                    <Input
                      id="start-time"
                      type="time"
                      width="120px"
                      top="20px"
                      value={starttime}
                      onChange={(e) => setStarttime(e.target.value)}
                    />
                    <Box position="relative" left="140px" bottom="12px">
                      ~
                    </Box>
                    <Input
                      id="end-time"
                      type="time"
                      width="120px"
                      bottom="41px"
                      left="170px"
                      value={endtime}
                      onChange={(e) => setEndtime(e.target.value)}
                    />

                    <Input
                      id="date"
                      placeholder="memo"
                      width="290px"
                      bottom="30px"
                      value={eventmore}
                      onChange={(e) => setEventmore(e.target.value)}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  });

  if (res[checknumber] !== undefined) {
    return res[checknumber];
  }

  return <></>;
};

export default Data;
