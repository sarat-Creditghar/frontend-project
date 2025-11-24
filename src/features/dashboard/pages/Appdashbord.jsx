
import Welcomecard from "../components/Welcomecard";
import welcomecarddata from "../data/welcomecarddata.json";
import Statscarddata from "../data/statsdata.json";
import Carousel from "../components/Carousel";
import Statscard from "../components/Statscard";

import PieChartInFlexbox from "../components/PieChartInFlexbox";
import StackedBarChart from "../components/StackBarChart";
import InvoiceTable from "../components/InvoiceTable";
import RelatedApplications from "../components/RelatedApplications";
import TopInstalledCountries from "../components/TopInstalledCountries"
import TopAuthors from "../components/TopAuthors"
import ConversionApplications from "../components/ConversionApplications";




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
                <RelatedApplications/>
            </div>


            <div className="border border-green-300 rounded-lg h-85 sm:col-span-2 lg:col-span-1 bg-accent">
                <TopInstalledCountries/>
            </div>
            <div className="border border-green-300 rounded-lg h-85 sm:col-span-2 lg:col-span-1 bg-accent">
                <TopAuthors/>
            </div>
            <div className=" rounded-lg h-85 sm:col-span-2 lg:col-span-1  p-2 flex flex-col" >
                <ConversionApplications/>
            </div>


        </div>

    );
};

export default Appdashbord;
