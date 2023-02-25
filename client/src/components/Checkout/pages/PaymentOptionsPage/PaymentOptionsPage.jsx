import React from 'react';
import Header from '../../../Header';
import TabsSection from '../../sections/TabsSection';
import PaymentSection from '../../sections/PaymentSection';
const PaymentOptionsPage = () => {
    return (
        <>
            <div>
                <Header />
                <TabsSection />
                <PaymentSection />
                {/*В этот компонет, в секцию container, после готового кода, вставить второй компонент*/}
            </div>
        </>
    );
};
export default PaymentOptionsPage;
