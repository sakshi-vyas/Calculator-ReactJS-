import React ,{ Component} from 'react'
class Solution extends Component{
    render()
    {
        let {ans} = this.props;
        return(
            <div className="ans" >
                <p>{ans} </p>
            </div>
        )
    }
}
export default Solution