import React, { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { CollectionAndActionsBaseHTML, Collection, Actions } from '../rootStateDefaultTypes';
import { Reducers } from '../../store/reducers';
import { actions } from '../../store/stateDefault';

import Header from '../../components/Header';

import { Styled } from './styled';


const PageContainer: React.FC<CollectionAndActionsBaseHTML> = ({
    children,
    collection,
    actions,
    ...rest
}) => {
    const { visibleSidebar } = collection;
    const [durationAnimation, setDurationAnimation] = useState<number>(300); //ms
    const [visible, setVisible] = useState<boolean>(visibleSidebar);
    const [animationClassName, setAnimationClassName] = useState<string>('-init');

    useMemo(() => {

        setAnimationClassName(visibleSidebar ? '-init' : '-out');
        visibleSidebar ? setVisible(true) : setVisible(false);

    }, [visibleSidebar, durationAnimation]);


    return (
        <Styled.Main {...rest}>
            {
                visible &&
                <Styled.Sidebar className={animationClassName} duration={durationAnimation}>
                    <Styled.Navigation />
                </Styled.Sidebar>
            }

            <Styled.Container>
                <Header />
                <Styled.Content>
                    {children}
                </Styled.Content>
            </Styled.Container>
        </Styled.Main>
    );
};

const mapStateToProps = (state: Reducers): Collection => ({ collection: state.stateDefault });
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({ actions: bindActionCreators({ ...actions }, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);