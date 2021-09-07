import react, { useContext } from 'react'
import Achievements from '../components/Achievements';
import ScrollToTop from '../components/Achievements/ScrollToTop';
import { LightThemeContext } from '../LightThemeContext';

const AchievementsPage = () => {
    const {lightTheme, setLightTheme} = useContext(LightThemeContext);
    const togglelight = ()=>{
        return setLightTheme(!lightTheme);
    };

    return (
        <div>
            <ScrollToTop/>
            <Achievements lightTheme={lightTheme} togglelight={togglelight}/>
        </div>
    )
}

export default AchievementsPage;