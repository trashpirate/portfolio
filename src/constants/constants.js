export const projects = [
  {
    title:
      "Statistical characterization of tactile scenes in three-dimensional environments reveals filter properties of somatosensory cortical neurons",
    description:
      "Natural scenes statistics have been studied extensively using collections of natural images and sound recordings. These studies have yielded important insights about how the brain might exploit regularities and redundancies in visual and auditory stimuli. In contrast, natural scenes for somatosensation have remained largely unexplored. Here we use three-dimensional scans of natural and human-made objects to quantify natural scene statistics at the scale of the human fingertip. Using measurements of distance, slope, and curvature from the object surfaces, we show that the first order statistics follow similar trends as have been observed for images of natural and human-made environments. In addition, independent component analysis of curvature measurements reveals Gabor-like basis vectors similar to those found in natural images. A simple neural model using these filters showed responses that accurately capture the statistics of responses in primate primary somatosensory cortex.",
    image: "/images/natural_scenes.png",
    tags: ["Python", "C++", "MATLAB"],
    source: "https://www.biorxiv.org/content/10.1101/2022.08.03.502632v1",
    visit: "",
    id: 0,
  },
  {
    title: "A dynamical model for generating synthetic data to quantify active tactile sensing behavior in the rat",
    description:
      "As it becomes possible to simulate increasingly complex neural networks, it becomes correspondingly important to model the sensory information that animals actively acquire: the biomechanics of sensory acquisition directly determines the sensory input and therefore neural processing. Here, we exploit the tractable mechanics of the well-studied rodent vibrissal (“whisker”) system to present a model that can simulate the signals acquired by a full sensor array actively sampling the environment. Rodents actively “whisk” ∼60 vibrissae (whiskers) to obtain tactile information, and this system is therefore ideal to study closed-loop sensorimotor processing. The simulation framework presented here, WHISKiT Physics, incorporates realistic morphology of the rat whisker array to predict the time-varying mechanical signals generated at each whisker base during sensory acquisition. Single-whisker dynamics were optimized based on experimental data and then validated against free tip oscillations and dynamic responses to collisions. The model is then extrapolated to include all whiskers in the array, incorporating each whisker’s individual geometry. Simulation examples in laboratory and natural environments demonstrate that WHISKiT Physics can predict input signals during various behaviors, currently impossible in the biological animal. In one exemplary use of the model, the results suggest that active whisking increases in-plane whisker bending compared to passive stimulation and that principal component analysis can reveal the relative contributions of whisker identity and mechanics at each whisker base to the vibrissotactile response. These results highlight how interactions between array morphology and individual whisker geometry and dynamics shape the signals that the brain must process.",
    image: "/images/whiskit.png",
    tags: ["C++", "Python", "MATLAB"],
    source: "https://www.pnas.org/doi/10.1073/pnas.2011905118",
    visit: "https://github.com/SeNSE-lab/whiskitphysics",
    id: 1,
  },
  {
    title: "Defining “active sensing” through an analysis of sensing energetics: homeoactive and alloactive sensing",
    description:
      "The term “active sensing” has been defined in multiple ways. Most strictly, the term refers to sensing that uses self-generated energy to sample the environment (e.g., echolocation). More broadly, the definition includes all sensing that occurs when the sensor is moving (e.g., tactile stimuli obtained by an immobile versus moving fingertip) and, broader still, includes all sensing guided by attention or intent (e.g., purposeful eye movements). The present work offers a framework to help disambiguate aspects of the “active sensing” terminology and reveals properties of tactile sensing unique among all modalities. The framework begins with the well-described “sensorimotor loop,” which expresses the perceptual process as a cycle involving four subsystems: environment, sensor, nervous system, and actuator. Using system dynamics, we examine how information flows through the loop. This “sensory-energetic loop” reveals two distinct sensing mechanisms that subdivide active sensing into homeoactive and alloactive sensing. In homeoactive sensing, the animal can change the state of the environment, while in alloactive sensing the animal can alter only the sensor’s configurational parameters and thus the mapping between input and output. Given these new definitions, examination of the sensory-energetic loop helps identify two unique characteristics of tactile sensing: 1) in tactile systems, alloactive and homeoactive sensing merge to a mutually controlled sensing mechanism, and 2) tactile sensing may require fundamentally different predictions to anticipate reafferent input. We expect this framework may help resolve ambiguities in the active sensing community and form a basis for future theoretical and experimental work regarding alloactive and homeoactive sensing.",
    image: "/images/energy_loop.png",
    tags: ["C++", "Python"],
    source: "https://journals.physiology.org/doi/full/10.1152/jn.00608.2019",
    visit: "",
    id: 2,
  },
];

export const TimeLineData = [
  {
    year: 2008,
    text: "Swiss Federal Cerificate in Audio Engineering",
    school: "Tontechnikschule TTS",
  },
  {
    year: 2014,
    text: "Bachelor of Science in Systems Engineering",
    school: "Zurich University of Applied Sciences",
  },
  {
    year: 2016,
    text: "Master of Science in Engineering (Biomedical Engineering)",
    school: "Grand Valley State University",
  },
  {
    year: 2022,
    text: "PhD in Biomedical Engineering (Neural Engineering)",
    school: "Northwestern University",
  },
];

export const AcomplishmentData = [
  { title: "Academic Excellence Award in Engineering", text: "2016" },
  { title: "Research Progress Award in Neural Engineering", text: "2020" },
];
