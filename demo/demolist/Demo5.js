/**
 *
 * @title mdf-refer基础使用2
 * @description <MdfRefer/>初始化参照，并搭配bee-from进行校验
 *
 */
import React, { Component } from 'react';
import MdfRefer,{cb} from '../../src'
import {Button} from 'tinper-bee';
class Demo5 extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
        this.model = new cb.models.ReferModel({
            cRefType:'ucf-org-center.bd_adminorgtreeviewref',
        });
        // this.config = {
        //     modelconfig:{
        //         afterValueChange:this.afterValueChange,
        //     }
        // }
    }
    
    // afterValueChange = (data) =>{
    //     console.log('demo2的js'+JSON.stringify(data))
    // }
    
    openRefer = () =>{
        this.model.browse();
    }
    
    render () {
       
        return (
            <div  className='demo'>
                {/* {cb.utils.initSupport('refer',this.model)} */}
                <MdfRefer 
                   model={this.model}
                /> 
                <Button onClick={this.openRefer}> 打开参照</Button>
                
            </div>
         )
    }
}

export default Demo5;
