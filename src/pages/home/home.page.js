import { log, page } from '../../decorators';
import { BasePage } from '../Base.page';

@page({
    route: "home", 
    templateURL: "home.page.html"
})
class home extends BasePage{
        
}