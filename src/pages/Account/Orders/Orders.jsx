import React, {useEffect, useState} from 'react';
import s from './Orders.module.scss';
import LongFormButton from "../../../components/UI/Buttons/LongFormButton/LongFormButton.jsx";
import NoOrders from "../../../components/OrdersComponents/NoOrders/NoOrders.jsx";
import OrderList from "../../../components/OrdersComponents/OrderList/OrderList.jsx";
import {Space} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {selectKeepData, selectKeepDataIsSuccess, resetKeepListState} from "../../../core/store/keep/slice.js";
import {selectCurrentUser} from "../../../core/store/auth/slice.js";
import {selectOwnerInfoData} from "../../../core/store/ownerInfo/slice.js";
import {getKeep} from "../../../core/store/keep/thunk.js";
import {getOwnerInfo} from "../../../core/store/ownerInfo/thunk";
import {openChooseModal} from "../../../core/store/modalChoosePet/slice.js";


const Orders = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector((state) => state.modalChoosePet.isModalPetChooseVisible);

    const keepData = useSelector(selectKeepData);
    const userData = useSelector(selectCurrentUser)
    const ownerData = useSelector(selectOwnerInfoData);
    const isSuccess = useSelector(selectKeepDataIsSuccess)

    const [keeps, setKeeps] = useState([]);
    const [ownerId, setOwnerId] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        dispatch(getKeep());
        dispatch(getOwnerInfo());
    }, [dispatch])

    useEffect(() => {
        if (userData) {
            setUserId(userData[0].id);
        }
    }, [userData]);

    useEffect(() => {
        if (userId !== null && ownerData) {
            const owner = ownerData.filter(item => item.user === userId);
            if (owner) {
                setOwnerId(owner[0].id);
            }
        }
    }, [ownerData, userId]);

    useEffect(() => {
        if (ownerId !== null && keepData) {
            const ownerKeeps = keepData.filter(item => item.owner === ownerId);
            setKeeps(ownerKeeps);
        }
    }, [keepData, ownerId])

    useEffect(() => {
        if(keeps && ownerId && userId){
            setLoading(false);
        }
    }, [keeps, ownerId, userId]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(resetKeepListState());
        }
    }, [keepData, dispatch]);

    useEffect(() => {
        if (!keepData && isSuccess){
            setLoading(true);
            dispatch(getKeep());
        }
    }, [keepData, isSuccess, dispatch])

    const buttonClick = () => {
        dispatch(openChooseModal());
        console.log(isOpen)
    };

    return (
      <div className={s.orders}>
          {loading ? (
              <Space className={s.loading}><LoadingOutlined/></Space>
          ) : (
              keeps && keeps.length > 0 ?
                  (
                    <OrderList keeps={keeps}/>
                  ) : <NoOrders/>
          )
          }
          <div className={s.button}>
              <LongFormButton>Заказать ситтинг</LongFormButton>
          </div>
          <div className={s.button}>
              <button onClick={buttonClick}>Pet Choose</button>
          </div>

      </div>
  );
};

export default Orders;
