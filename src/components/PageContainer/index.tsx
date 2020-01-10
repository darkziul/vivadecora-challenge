import React, {useState, useMemo} from 'react';
import {connect} from 'react-redux';

import Header from '../../components/Header';
import {Reducers} from '../../store/reducers';

import {Collection} from '../Navigation';

import {Styled} from './styled';


const PageContainer:React.FC<Collection&React.BaseHTMLAttributes<any>> = ({children, collection, ...rest}) => {
    const {visibleSidebar} = collection;
    
    const durationAnimation:number = 200; //ms
    const [visible, setVisible] = useState<boolean>(visibleSidebar);
    const [animationClassName, setAnimationClassName] = useState<string>('-init');
    const [fnSetTime, setFnSetTime] = useState<any>(undefined);

    useMemo(()=>{
    
       setAnimationClassName(visibleSidebar ? '-init': '-out');
       if(!visibleSidebar) {
            if(fnSetTime) clearTimeout(fnSetTime);
            setFnSetTime(setTimeout(()=>setVisible(false), durationAnimation));
       }
       else setVisible(true);

    },[visibleSidebar]);

    return(
        <Styled.Main {...rest}>
            {
                visible &&
                <Styled.Sidebar className={animationClassName} duration={durationAnimation}>
                    <Styled.Navigation/>
                </Styled.Sidebar>
            }

            <Styled.Container>
                <Header/>
                <Styled.Content>
                    {children}
                </Styled.Content>
            </Styled.Container>
        </Styled.Main>
    );
};

const mapStateToProps  = (state:Reducers):Collection => ({
    collection: state.navigation
});
export default connect(mapStateToProps)(PageContainer);