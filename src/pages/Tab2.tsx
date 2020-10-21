import React, {useState} from 'react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const {photos,takePhoto,deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<Photo>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
          {photos.map((photo, index) => (
          <IonCol size="6" key={index}>
          <IonImg onClick={() => setPhotoToDelete(photo)} 
              src={photo.webviewPath} />
          </IonCol>
          ))}
        </IonRow>
      </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonActionSheet
  isOpen={!!photoToDelete}
  buttons={[{
    text: 'Delete',
    role: 'destructive',
    icon: trash,
    handler: () => {
      if (photoToDelete) {
        deletePhoto(photoToDelete);
        setPhotoToDelete(undefined);
      }
    }
  }, {
    text: 'Cancel',
    icon: close,
    role: 'cancel'
  }]}
  onDidDismiss={() => setPhotoToDelete(undefined)}
/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
