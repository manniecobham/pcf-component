import * as React from 'react';
import { Label } from '@fluentui/react';
import Gallery from 'react-photo-gallery';
import { photos } from './photos';

export interface IHelloWorldProps {
  name?: string;
}

export function HelloWorld(props: IHelloWorldProps) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const openLightBox = React.useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightBox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      {<Label>{props.name}</Label>}
      {<Gallery photos={photos} />}
    </div>
  )
}