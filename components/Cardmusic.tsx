import React from 'react';
import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

const Cardmusic = () => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listening to music"
        className="object-cover w-full h-48"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button 
          className="text-tiny text-white bg-black/20" 
          variant="flat" 
          color="default" 
          radius="lg" 
          size="sm"
          aria-label="Notify me when available"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Cardmusic;
