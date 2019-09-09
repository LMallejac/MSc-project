import { NODE_CATEGORY, NODE_TYPE } from "../common/constants";

export default function getAifdbData() {
  return HARD_CODED_DATA;
}

const HARD_CODED_DATA = {
  nodes: [
    {
      nodeID: "1",
      text: "9 out of 16 parachutes had been tampered with.",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "2",
      text:
        "Unopened reserve pooch on the victims body is clean. No blood, no leaves, no tear.",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "3",
      text: "Too clean for someone who went through a tree and an SUV.",
      type: NODE_TYPE.OBSERVATION,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "4",
      text:
        "The reserve pooch in Dafelmair bag (pooch 13) is dirty enough to correspond.",
      type: NODE_TYPE.OBSERVATION,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "5",
      text:
        "Dafelmair switched his reserve pooch with Fuentes' one after finding his body.",
      type: NODE_TYPE.INTERPRETATION,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "6",
      text:
        "Pooch 13's cone has been soldered in place, meaning it can't open.",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "7",
      text:
        "9/16 of the main parachutes were sabotaged by melting the cords with sulfuric acid",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "8",
      text:
        "CRIME WEAPON:\n\nDisintegrated fibers on the main parachute (edges look melted). \n Caused by sulfuric acid. Soldered cone on the reserve parachute (hidden in Dafelmair sack)",
      type: NODE_TYPE.CONCLUSION,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "24",
      text: ".",
      type: NODE_TYPE.LINK,
      category: NODE_CATEGORY.WEAPON
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "9",
      text:
        "Dafelmair had criminal record before the army: drug possession and shoplifting.",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.MOTIVE
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "10",
      text: "He joined the army 3 years ago to avoid prison.",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.MOTIVE
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "11",
      text: "Cocaine traces found on sabotaged parachutes.",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.MOTIVE
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "12",
      text: "Cocaine traces are very pure.",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.MOTIVE
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "13",
      text:
        "Cocaine traces do not come from someone using, but someone cutting and weighting, hence dealing.",
      type: NODE_TYPE.EVIDENCE,
      category: NODE_CATEGORY.MOTIVE
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "14",
      text:
        "MOTIVE:\n\nThe victim knew Dafelmair was dealing drugs and wanted to say it to his superiors.",
      type: NODE_TYPE.CONCLUSION,
      category: NODE_CATEGORY.MOTIVE
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "25",
      text: ".",
      type: NODE_TYPE.LINK,
      category: NODE_CATEGORY.MOTIVE
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "15",
      text:
        "Crime scene: the witnesses, two teenagers, were parked and were listening to the radio in an SUV. Said the victim smashed through the roof, they screamed and ran for help, but the victim was still groaning",
      type: NODE_TYPE.OBSERVATION,
      category: "Cause of death"
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "16",
      text:
        "Initial evidence: \n- abrasions\n- purple discoloration on neck\n- potentially a broken neck ?\nbody fall fall was probably slowed down by tree",
      type: NODE_TYPE.OBSERVATION,
      category: "Cause of death"
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "17",
      text:
        "Autopsy results:\n- broken neck, crushed vertebrae, multiple leg fractures, shattered pelvis\n- femoral artery severed\n- collarbone had an older very thin fracture that had started to heal\n- 1.07 on Percocet and Vicodin => victim ingested meds right before dropping\n- CAUSE OF DEATH: bled to death",
      type: NODE_TYPE.OBSERVATION,
      category: "Cause of death"
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "18",
      text:
        "CAUSE OF DEATH:\n\nFell through a SUV during a jump. Femoral artery cut. Was still alive for a bit. Bled to death.",
      type: NODE_TYPE.CONCLUSION,
      category: "Cause of death"
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "26",
      text: ".",
      type: NODE_TYPE.LINK,
      category: "Cause of death"
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "19",
      text: "Dafelmair is a parachutist in Fuente's squad.",
      type: NODE_TYPE.OBSERVATION,
      category: NODE_CATEGORY.OPPORTUNITY
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "20",
      text:
        "Dafelmair was close to Fuentes when jumping, allowing him to attempt to kill him by multiple ways.",
      type: NODE_TYPE.INTERPRETATION,
      category: NODE_CATEGORY.OPPORTUNITY
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "21",
      text: "Dafelmair is a parachute rigger.",
      type: NODE_TYPE.OBSERVATION,
      category: NODE_CATEGORY.OPPORTUNITY
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "22",
      text:
        "Dafelmair had the knowledge and opportunity to sabotage Fuentes' gear",
      type: NODE_TYPE.INTERPRETATION,
      category: NODE_CATEGORY.OPPORTUNITY
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "23",
      text:
        "OCCASION:\n\nDafelmair is a parachute rigger, he had the opportunity to sabotage the parachutes. He had the opportunity to switch the sabotaged emergency parachute with his own after the death of Fuentes.",
      type: NODE_TYPE.CONCLUSION,
      category: NODE_CATEGORY.OPPORTUNITY
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "27",
      text: ".",
      type: NODE_TYPE.LINK,
      category: NODE_CATEGORY.OPPORTUNITY
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "28",
      text: "Dafelmair",
      type: NODE_TYPE.CONCLUSION,
      category: NODE_CATEGORY.SUSPECT
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "29",
      text: "Fuentes",
      type: NODE_TYPE.CONCLUSION,
      category: NODE_CATEGORY.VICTIM
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "30",
      text: "Parachutist",
      type: NODE_TYPE.FACT,
      category: NODE_CATEGORY.SUSPECT
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "31",
      text:
        "Criminal records of shoplifting and drugs possession from 3 years ago, chose to serve instead of going to prison",
      type: NODE_TYPE.FACT,
      category: NODE_CATEGORY.SUSPECT
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "32",
      text: ".",
      type: NODE_TYPE.LINK,
      category: NODE_CATEGORY.SUSPECT
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "33",
      text: ".",
      type: NODE_TYPE.LINK,
      category: NODE_CATEGORY.VICTIM
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "34",
      text: "Parachutist",
      type: NODE_TYPE.FACT,
      category: NODE_CATEGORY.VICTIM
      //TODO timestamp: "2014-07-15 13:40:16"
    },
    {
      nodeID: "35",
      text:
        'Called "Thumper" because of his luck. Had an accident with a car while on a bike a few days earlier, only broke his collarbone and came back to work 2 days after',
      type: NODE_TYPE.FACT,
      category: NODE_CATEGORY.VICTIM
      //TODO timestamp: "2014-07-15 13:40:16"
    }
  ],
  edges: [
    /* Weapon */
    {
      edgeID: "1",
      fromID: "1",
      toID: "7"
      // formEdgeID: null
    },
    {
      edgeID: "2",
      fromID: "2",
      toID: "3"
      // formEdgeID: null
    },
    {
      edgeID: "3",
      fromID: "3",
      toID: "4"
      // formEdgeID: null
    },
    {
      edgeID: "4",
      fromID: "3",
      toID: "6"
      // formEdgeID: null
    },
    {
      edgeID: "5",
      fromID: "4",
      toID: "5"
      // formEdgeID: null
    },
    {
      edgeID: "6",
      fromID: "7",
      toID: "24"
      // formEdgeID: null
    },
    {
      edgeID: "7",
      fromID: "6",
      toID: "24"
      // formEdgeID: null
    },
    {
      edgeID: "28",
      fromID: "24",
      toID: "8"
      // formEdgeID: null
    },

    /* Motive */
    {
      edgeID: "8",
      fromID: "9",
      toID: "10"
      // formEdgeID: null
    },
    {
      edgeID: "9",
      fromID: "11",
      toID: "12"
      // formEdgeID: null
    },
    {
      edgeID: "10",
      fromID: "12",
      toID: "13"
      // formEdgeID: null
    },
    {
      edgeID: "11",
      fromID: "9",
      toID: "25"
      // formEdgeID: null
    },
    {
      edgeID: "26",
      fromID: "25",
      toID: "14"
      // formEdgeID: null
    },

    {
      edgeID: "12",
      fromID: "13",
      toID: "25"
      // formEdgeID: null
    },

    /* Cause of death */
    {
      edgeID: "13",
      fromID: "15",
      toID: "16"
      // formEdgeID: null
    },
    {
      edgeID: "14",
      fromID: "16",
      toID: "17"
      // formEdgeID: null
    } /*
    {
      edgeID: "15",
      fromID: "17",
      toID: "18"
      // formEdgeID: null
    },*/,
    {
      edgeID: "16",
      fromID: "19",
      toID: "20"
      // formEdgeID: null
    },
    {
      edgeID: "17",
      fromID: "21",
      toID: "22"
      // formEdgeID: null
    },
    {
      edgeID: "18",
      fromID: "22",
      toID: "27"
      // formEdgeID: null
    },
    {
      edgeID: "19",
      fromID: "20",
      toID: "27"
      // formEdgeID: null
    },
    {
      edgeID: "20",
      fromID: "18",
      toID: "23"
      // formEdgeID: null
    },
    {
      edgeID: "21",
      fromID: "8",
      toID: "14"
      // formEdgeID: null
    },
    {
      edgeID: "22",
      fromID: "14",
      toID: "18"
      // formEdgeID: null
    },
    {
      edgeID: "23",
      fromID: "27",
      toID: "23"
      // formEdgeID: null
    },
    {
      edgeID: "24",
      fromID: "17",
      toID: "26"
      // formEdgeID: null
    },
    {
      edgeID: "25",
      fromID: "26",
      toID: "18"
      // formEdgeID: null
    },
    {
      edgeID: "29",
      fromID: "23",
      toID: "28"
      // formEdgeID: null
    },
    {
      edgeID: "30",
      fromID: "28",
      toID: "29"
      // formEdgeID: null
    },
    {
      edgeID: "31",
      fromID: "35",
      toID: "33"
      // formEdgeID: null
    },
    {
      edgeID: "32",
      fromID: "34",
      toID: "33"
      // formEdgeID: null
    },
    {
      edgeID: "33",
      fromID: "33",
      toID: "29"
      // formEdgeID: null
    },
    {
      edgeID: "34",
      fromID: "30",
      toID: "32"
      // formEdgeID: null
    },
    {
      edgeID: "35",
      fromID: "31",
      toID: "32"
      // formEdgeID: null
    },
    {
      edgeID: "36",
      fromID: "32",
      toID: "28"
      // formEdgeID: null
    }
  ]
};
