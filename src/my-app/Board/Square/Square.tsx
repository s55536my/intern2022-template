import Today from "~/my-app/Board/Square/Today/Today";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
  ChakraProvider,
  Input,
  Box
} from "@chakra-ui/react";

type SquareState =
  | "月"
  | "火"
  | "水"
  | "木"
  | "金"
  | "土"
  | "日"
  | number
  | null;

type SquareProps = {
  value: SquareState;
  onClick: () => void;
  SQi: number;
  SQ2: number;
};

const Square = (props: SquareProps) => (
  <Popover>
    <PopoverTrigger>
      <button className="square" onClick={props.onClick}>
        {(() => {
          if (props.SQi > 7 && props.SQi === props.SQ2) {
            return <Today />;
          }
        })()}
        {props.value}
      </button>
    </PopoverTrigger>
    <Portal>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>予定の詳細</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Box>予定</Box>
          <Input id="event" defaultValue="" />
          <Box>予定日</Box>
          <Input id="event-day" defaultValue="" />
          <Box>開始時間</Box>
          <Input id="start-time" defaultValue="00:00" />
          <Box>終了時間</Box>
          <Input id="end-time" defaultValue="00:00" />
          <Box>予定の詳細</Box>
          <Input id="event-moreinfo" defaultValue="" />
        </PopoverBody>
      </PopoverContent>
    </Portal>
  </Popover>
);

export default Square;
