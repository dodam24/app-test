import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";

export default function DigitalClockBasic() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DigitalClock", "MultiSectionDigitalClock"]}>
                <DemoItem>
                    <MultiSectionDigitalClock
                        views={["hours", "minutes", "seconds"]}
                        ampm={false}
                        timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
