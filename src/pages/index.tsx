import { Button, Heading } from "@navikt/ds-react";
import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";

export default function Index() {
  const myAmplitudeLogger = (event: string, data: Record<string, any>) => {
    logAmplitudeEvent({
      origin: "frontend-onboarding-demo", // Navn på kallende applikasjon. Sendes i data-feltet "origin" til Amplitude (påkrevd)
      eventName: event, // Event-navn (påkrevd)
      eventData: data, // Event-data objekt (valgfri)
    }).catch((e) => console.log(`Oh no! ${e}`)); // Funksjonen rejecter ved feil
  };
  return (
    <main>
      <Heading level="1" size="xlarge">
        Frontend onboarding demo
      </Heading>
      <Button
        variant="primary"
        onClick={() => myAmplitudeLogger("trykk på knapp", {})}
      >
        Trykk på meg!
      </Button>
    </main>
  );
}
