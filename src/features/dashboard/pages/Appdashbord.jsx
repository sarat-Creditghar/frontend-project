
import Welcomecard from "../components/Welcomecard";
import welcomecarddata from "../data/welcomecarddata.json";
import Statscarddata from "../data/statsdata.json";
import Carousel from "../components/Carousel";
import Statscard from "../components/Statscard";

import PieChartInFlexbox from "../components/PieChartInFlexbox";
import StackedBarChart from "../components/StackBarChart";
import InvoiceTable from "../components/InvoiceTable";

const Appdashbord = () => {
    return (
        <div
            className="w-full p-6 grid gap-6
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3"
        >
            {/* Full width block top-left */}
            <div className=" border border-green-300 rounded-lg h-70 sm:col-span-2 lg:col-span-2 bg-accent">
                <Welcomecard welcomeData={welcomecarddata} />
            </div>
            <div className="border border-green-300 rounded-lg h-70 sm:col-span-2 lg:col-span-1">
                <Carousel />
            </div>

            {
                Statscarddata.map((t, index) => (
                    <Statscard key={index} t={t} />
                ))
            }

            <div className="border border-green-300 rounded-lg h-85 sm:col-span-2 lg:col-span-1  ">
                {/*pie chart some styling needed*/}
                <PieChartInFlexbox />
            </div>
            <div className="border border-green-300 rounded-lg h-85 sm:col-span-2 lg:col-span-2 ">
                <StackedBarChart />
            </div>


            <div className="border border-green-300 rounded-lg h-fit sm:col-span-2 lg:col-span-2  ">
                <InvoiceTable />
            </div>
            <div className="border border-green-300 rounded-lg h-85 sm:col-span-2 lg:col-span-1 bg-accent">
                chart
            </div>


            <div className="border border-green-300 rounded-lg h-85 sm:col-span-2 lg:col-span-1 bg-accent">
                chart
            </div>
            <div className="border border-green-300 rounded-lg h-85 sm:col-span-2 lg:col-span-1 bg-accent">
                chart
            </div>
            <div className=" rounded-lg h-85 sm:col-span-2 lg:col-span-1  p-2 flex flex-col" >
                <div className="h-1/2  row-span-1 bg-primary mb-4"> </div>
                <div className="h-1/2 row-span-1 bg-primary"> </div>
            </div>


        </div>

    );
};

export default Appdashbord;
