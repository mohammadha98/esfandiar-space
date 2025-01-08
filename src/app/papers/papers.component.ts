import { Component } from '@angular/core';

@Component({
  selector: 'app-papers',
  standalone: true,
  imports: [],
  templateUrl: './papers.component.html',
  styleUrl: './papers.component.css'
})
export class PapersComponent {
  Papers=[
    {
      img:'/image/Ephemeris_Updates_for_Seven_Selected_HATNet_Survey_Transiting_Exoplanets.jpg',
      link:'https://link.springer.com/article/10.1007/s10511-023-09794-y',
      title:'Ephemeris Updates for Seven Selected HATNet Survey Transiting Exoplanets',
      description:`We refined the ephemeris of seven transiting exoplanets using observations from ground- and
            space-based telescopes, including TESS data. Mid-transit times were calculated, and transit timing
            variation (TTV) diagrams were generated.`
    },
    {
      img:'/image/The First Photometric Study of AH Mic Contact Binary System.jpg',
      link:'https://iopscience.iop.org/article/10.1088/1674-4527/ac6417',
      title:'The First Photometric Study of AH Mic Contact Binary System',
      description:` We conducted the first multi-color photometric analysis of the AH Mic contact binary system,
            determining its physical parameters and ephemeris. Our results show that AH Mic is a W-subtype W UMa
            system with a 21.3% fill-out factor and estimated absolute parameters using Gaia EDR3 parallax.`
    },
    {
      img:'/image/Period-Luminosity Relationship for δ Scuti Stars Revisited.png',
      link:'https://iopscience.iop.org/article/10.1088/1674-4527/ad1b0f',
      title:'Period-Luminosity Relationship for δ Scuti Stars Revisited',
      description:`  We analyzed 2375 δ Scuti stars using Gaia DR3 parallaxes, calculating their pulsation modes and
            refining the Period-Luminosity relationships. We evaluated the parameters in the pulsation constant
            (Q) calculation equation using three machine learning methods.`
    },
    {
      img:'/image/1729031464079.jpg',
      link:'https://www.researchgate.net/publication/366186892_Calculating_Physical_Parameters_of_Delta_Scuti_Stars_by_using_Gaia_EDR3_Parallax',
      title:'Calculating Physical Parameters of Delta Scuti Stars by using Gaia EDR3 Parallax',
      description:` Using Gaia EDR3 parallaxes, we recalculated the luminosities, magnitudes, and physical parameters of
            520 δ Scuti stars. These parameters were derived based on observational data, dust maps, and
            bolometric corrections.`
    },
  ]
}
