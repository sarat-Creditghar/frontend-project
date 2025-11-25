import React from 'react';
import AccountBillingPlan from './billing/AccountBillingPlan';
import AccountBillingPaymentMethod from './billing/AccountBillingPaymentMethod';
import AccountBillingAddressBook from './billing/AccountBillingAddressBook';
import AccountBillingInvoiceHistory from './billing/AccountBillingInvoiceHistory';
import billingData from '../../features/dashboard/data/billingData.json';

const AccountBilling = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Plan, Payment Method, Address Book */}
            <div className="lg:col-span-2">
                <AccountBillingPlan plans={billingData.plans} />
                <AccountBillingPaymentMethod cards={billingData.cards} />
                <AccountBillingAddressBook addresses={billingData.addresses} />
            </div>

            {/* Right Column: Invoice History */}
            <div className="lg:col-span-1">
                <AccountBillingInvoiceHistory invoices={billingData.invoices} />
            </div>
        </div>
    );
};

export default AccountBilling;
