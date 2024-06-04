import React, {useState} from 'react';
import Collapsible from 'react-collapsible';
import './Home.css';
import DebateOverview from './DebateOverview';

const Home = () => 
{
    const [selectedYear, setSelectedYear] = useState(null);

    const debates = [1976, 1984, 2016, 2020];


    return(
        <div className="main">
            <div className="debate-container">
                <Collapsible trigger="Select A Debate">
                    <div className="debate-selector">
                        {debates.map(year => (
                                    <button
                                        key={year}
                                        className="debate-button"
                                        onClick={() => setSelectedYear(year)}
                                    >
                                        {year}
                                    </button>
                                ))}
                    </div>
                </Collapsible>
                
                {selectedYear && (
                    <Collapsible trigger="Debate Overview">
                        <DebateOverview year={selectedYear} />
                    </Collapsible>
                )}

            </div>
            
            <div className='sidebar'>
            </div> 
        
        </div>
    )   
}

export default Home