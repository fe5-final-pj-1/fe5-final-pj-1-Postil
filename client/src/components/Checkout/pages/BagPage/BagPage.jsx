import React from 'react';
import Header from '../../../Header';
import TabsSection from '../../sections/TabsSection';
import SummarySection from '../../sections/SummarySection';

const BagPage = () => {
    return (
        <>
            <div>
                <Header />
                <TabsSection />
                <SummarySection />
                {/*В этот компонет, в секцию container, перед готовым кодом, вставить второй компонент*/}
            </div>
        </>
    );
};
export default BagPage;
