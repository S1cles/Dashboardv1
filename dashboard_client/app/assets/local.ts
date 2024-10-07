import dashboard from './svg/dashboard.svg';
import customers from './svg/customers.svg';
import products from './svg/products.svg';
import income from './svg/income.svg';
import promote from './svg/promote.svg';
import help from './svg/help.svg';

// import {initLocal} from '../locals/eng/dashboard'

   


const local =
    {
    buttons:['Dashboard','Products','Customers','Income','Promote','Help'],
    svg:[dashboard,products,customers,income,promote,help],
    to:['/dashboard','/products','/customers','/income','/promote','/help']
    }

export default local