import { LoadingOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddPetCard } from '../../../components/UI/AddPetCard/AddPetCard.jsx';
import PetCard from '../../../components/UI/PetCard/PetCard.jsx';
import {
  resetPetFormState,
  selectPetFormIsLoading,
  selectPetFormIsSuccess,
  selectPetsData,
} from '../../../core/store/pet/slice.js';
import { getPetForm } from '../../../core/store/pet/thunk.js';
import s from './MyPets.module.scss';

export function MyPets() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectPetFormIsLoading);
  const isSuccess = useSelector(selectPetFormIsSuccess);
  const petsData = useSelector(selectPetsData);

  useEffect(() => {
    dispatch(getPetForm());
  }, [dispatch]);

  useEffect(() => {
    if (petsData === null) {
      dispatch(getPetForm());
    }
  }, [dispatch, petsData]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetPetFormState());
    }
  }, [petsData, dispatch]);

  return (
    <div className={s.myPets_container}>
      {isLoading ? (
        <Space className={s.loading}>
          <LoadingOutlined />
        </Space>
      ) : petsData && petsData.length > 0 ? (
        petsData.map((pet) => (
          <PetCard key={pet.id} name={pet.name} species={pet.species} id={pet.id} />
        ))
      ) : (
        ''
      )}
      <AddPetCard />
    </div>
  );
}
