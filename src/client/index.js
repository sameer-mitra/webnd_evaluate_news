import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { checkUrl } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkUrl);

alert("I EXIST")
console.log("CHANGE!!");

export {
    checkUrl,
    handleSubmit
}
