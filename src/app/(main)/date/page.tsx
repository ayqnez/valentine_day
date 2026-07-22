import HeartsRain from "@/components/HeartsRain";
import BackgroundImage from '@/components/BackgroundImage';
import bgMain from '@/images/bg.png'
import DatePlanner from "@/components/DatePlanner";


export default function Index() {
    return (
        <>
            <BackgroundImage src={bgMain.src} bgClassName='bg-white'>
                <DatePlanner />
            </BackgroundImage>
        </>
    )
}