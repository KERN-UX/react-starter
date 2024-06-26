import { KernAlert } from "@kern-ux/react";

export default function App() {
  return (
    <div className="App">
      <KernAlert
        _label="KERN-UX erfolgreich eingerichtet"
        _variant="card"
        _type="success"
      >
        Kern-UX wurde erfolgreich eingerichtet. Unter{" "}
        <kern-link
          _href="https://www.kern-ux.de/design-system/components"
          _label="kern-ux.de/design-system/components"
          _target="_blank"
          _icons="material-symbols-outlined arrow_forward"
        ></kern-link>{" "}
        finden sich alle verfügbaren Komponenten.
      </KernAlert>
    </div>
  );
}
