import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { useState } from "react";
import PastResults from "./PastResults";
import { runTable } from "./Run";
import { situpTable } from "./Situp"; 
import { pushupTable } from "./Pushup";
import Ins from "../Page4/Instructions"

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };


export default function Page3() {
    const [age, setAge] = useState(25);
    const [situp, setSitup] = useState(30);
    const [pushup, setPushup] = useState(30);
    const [runMin, setRunMin] = useState(13);
    const [runSec, setRunSec] = useState(10);
    const [scoreSitup, setScoreSitup] = useState(17);
    const [scorePushup, setScorePushup] = useState(14);
    const [scoreRun, setScoreRun] = useState(28);
    const [total, setTotal] = useState(59);
    const [grade, setGrade] = useState("Pass - $0");

    function update() {
        const newPushup = pushupTable[age - 18][pushup - 1];
        const newSitup = situpTable[age - 18][situp - 1];
        const runTimeSec = runMin * 60 + runSec;
        const newRun = runTable[age - 18][(runTimeSec - 510) / 10];
        const newTotal = newPushup + newSitup + newRun;
      
        if (newPushup != scorePushup) {
            setScorePushup(newPushup)
        } 

        if (newSitup != scoreSitup) {
            setScoreSitup(newSitup)
        } 

        if (newRun != scoreRun) {
            setScoreRun(newRun)
        } 

        if (newTotal != total) {
            setTotal(newTotal)
        }

        if (total >= 51 && total < 61) {
            setGrade("Pass - $0")
        } else if (total >= 61 && total < 75) {
            setGrade("Pass with Incentive - $200")
        } else if (total >= 75 && total < 85) {
            setGrade("Silver - $300")
        } else if (total >= 85 && total < 90) {
            setGrade("Gold - $500")
        } else if (total >= 90) {
            setGrade("Gold(Commando / Diver / Guards) - $500")
        }
    } 

    function plusAge() {
        setAge(age + 1)
        update()
    }

    function plusSitup() {
        setSitup(situp + 1)
        update()
    }

    function plusPushup() {
        setPushup(pushup + 1)
        update()
    }

    function plusRun() {
        if (runSec === 50) {
            setRunMin(runMin + 1)
            setRunSec(0)
        } else {
            setRunSec(runSec + 10)
        }
        update()
    }

    function minusAge() {
        setAge(age - 1)
        update()
    }

    function minusSitup() {
        setSitup(situp - 1)
        update()
    }

    function minusPushup() {
        setPushup(pushup - 1)
        update()
    }

    function minusRun() {
        if (runSec === 0) {
            setRunMin(runMin - 1)
            setRunSec(50)
        } else {
            setRunSec(runSec - 10)
        }
        update()
    }

    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>{{Ins}}}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );
    

    return (
        <View style={styles.main}>
            <View style={styles.container1}>
                <Text style={styles.header}>IPPT/Fitness</Text>
                <StatusBar style="auto" />
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailTextHeader}>IPPT Details</Text>
                
                <Text style={styles.detailTextHeader2}>IPPT Deadline: </Text>
                <Text style={styles.detailText}>10 June 2022</Text>

                <Text style={styles.detailTextHeader2}>Past IPPT Results: </Text>
                <PastResults year="2021" grade="Gold"/>
                <PastResults year="2020" grade="Gold"/>
                <PastResults year="2019" grade="Gold"/>
                <PastResults year="2018" grade="Gold"/>
                <PastResults year="2017" grade="Gold"/>
            </View>

            <View style={styles.detailsContainer2}>
                <Text style={styles.detailTextHeader}>IPPT Calculator</Text>
                <View style={styles.detailsContainer3}>
                    <Button title="-" onPress={minusAge} disabled={age === 18}></Button>
                    <Text style={styles.detailTextHeader4}>Age: {age}</Text> 
                    <Button title="+" onPress={plusAge} disabled={age === 60}></Button>
                </View>

                <View style={styles.detailsContainer3}>
                    <Button title="-" onPress={minusSitup} disabled={situp === 0}></Button>
                    <Text style={styles.detailTextHeader4}>Sit-up: {situp}</Text> 
                    <Button title="+" onPress={plusSitup} disabled={situp === 60}></Button>
                    <Text style={styles.detailTextHeaderScore}>score: {scoreSitup}</Text> 
                </View>

                <View style={styles.detailsContainer3}>
                    <Button title="-" onPress={minusPushup} disabled={pushup === 0}></Button>
                    <Text style={styles.detailTextHeader4}>Push-up: {pushup}</Text> 
                    <Button title="+" onPress={plusPushup} disabled={pushup === 60}></Button>
                    <Text style={styles.detailTextHeaderScore}>score: {scorePushup}</Text> 
                </View>

                <View style={styles.detailsContainer3}>
                    <Button title="-" onPress={minusRun} disabled={runMin === 8 && runSec === 30}></Button>
                    <Text style={styles.detailTextHeader4}>2.4Km Run: {runMin}min {runSec}sec
                    </Text> 
                    <Button title="+" onPress={plusRun} disabled={runMin === 18 && runSec === 20}></Button>
                    <Text style={styles.detailTextHeaderScore}>score: {scoreRun}</Text> 
                </View>
                
            
                <Text style={styles.detailTextHeader3}>Results: {total} Points</Text>
                <Text style={styles.detailTextGrade}>{grade}</Text>
                <AppButton title="Start Self-administered IPPT" size="sm" backgroundColor="#007bff" />


            </View>

        </View>
        
        
        
            
        
        
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    container1: {
        height: "10%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius:10,
    },

    header: {
        fontSize: 35,
        color: "black",
        fontWeight: "bold",
    },

    detailsContainer: {
        height: 230,
        width: "100%",
        //flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius:10,
        paddingLeft: "5%",
        paddingTop: 5,
        marginBottom:10,
    },

    detailsContainer2: {
        height: 400,
        width: "100%",
        //flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius:10,
        paddingLeft: "5%",
        paddingTop: 5,
        marginBottom:10,
    },

    detailTextHeader: {
        color: "red",
        fontSize: 22,
        fontWeight: "bold",
    },

    detailTextHeader2: {
        paddingTop: 10,
        //paddingBottom: 10,
        color: "black",
        fontSize: 17,
        fontWeight: "bold",
    },

    detailText: {
        color: "black",
        fontSize: 15,
        fontWeight: "normal",
    },

    detailTextHeader3: {
        paddingTop: 35,
        //paddingBottom: 10,
        color: "black",
        fontSize: 17,
        fontWeight: "bold",
    },
    
    detailsContainer3: {
        height: 50,
        width: "100%",
        //flex: 1,
        backgroundColor: "#black",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius:10,
        paddingLeft: 2,
        paddingTop: 10,
        //marginBottom:10,
        flexDirection: "row",
    },

    detailTextHeader4: {
        padding: 5,
        //marginRight:100,
        //paddingBottom: 10,
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        width: 200,
        borderWidth: 1,
        borderRadius: 7,
        marginLeft:1,
        marginRight:1,
    },

    detailTextHeaderScore: {
        padding: 5,
        marginLeft:4,
        //marginRight:100,
        //paddingBottom: 10,
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        width: 95,
        borderWidth: 1,
        borderRadius: 7,
    },

    detailTextGrade: {
        paddingTop: 10,
        //paddingBottom: 10,
        color: "black",
        fontSize: 17,
        fontWeight: "bold",
    },

    appButtonContainer: {
        marginTop: 15,
        marginLeft: 17,
        elevation: 8,
        backgroundColor: "red",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
      },
      appButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  });