import dashboard from '../../assets/svg/dashboard.svg';
import customers from '../../assets/svg/customers.svg';
import products from '../../assets/svg/products.svg';
import income from '../../assets/svg/income.svg';
import promote from '../../assets/svg/promote.svg';
import help from '../../assets/svg/help.svg';
import {initLocal} from '../../types/local'





const dashboard_local: initLocal =
    {
        buttons:['Dashboard','Projects','Sprints','Planner','Profile','Help'],
        svg:[dashboard,products,customers,income,promote,help],
        to:['/pages/dashboard','/pages/projects','/pages/sprints','/pages/planner','/pages/profile','/pages/help']
    }

export default dashboard_local