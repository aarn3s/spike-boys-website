import React from 'react'
import { TextContainer } from './components/TextContainer'
import { MediaContainer } from './components/MediaContainer'
import ReactPlayer from 'react-player/youtube'


export const Home = () => (
	<div className="iso-div">
		<TextContainer className='TextiContaineri'>
      <h2>Home Otsikko</h2>

      Styling ei myöskään toimi kun teksti on mobiilissa tai vice versa, mieti teetkö media queryitä, vai koitatko selvitä 
      bootstrapsilla ja devault koolla ja spacingillä.

      <p>
		    Iam nunc quaeramus diligentius quantum dat deus quod paulo ante distulimus, utrum et singula quaeque in trinitate 
        persona possit et per se ipsam non cum ceteris duabus dici deus aut magnus aut sapiens aut uerus aut omnipotens aut 
        iustus et si quid aliud de deo dici potest, non relatiue sed ad se ipsum, an uero non dicantur ista nisi cum 
        trinitas intellegitur. Hoc enim quaestionem facit quia scriptum est: Christum dei uirtutem et dei sapientiam, 
        utrum ita sit pater sapientiae atque uirtutis suae ut hac sapientia sapiens sit quam genuit et hac uirtute 
        potens quam genuit, et quia semper potens et sapiens, semper genuit uirtutem et sapientiam. Dixeramus enim si 
        ita est cur non et magnitudinis suae pater sit qua magnus est et bonitatis qua bonus et iustitiae qua iustus 
        et alia si qua sunt. Aut si haec omnia pluribus uocabulis in eadem sapientia et uirtute intelleguntur ut ea 
        sit magnitudo quae uirtus, ea bonitas quae sapientia, et ea rursus sapientia quae uirtus sicut iam tractauimus, 
        meminerimus cum aliquid horum nomino sic accipiendum esse ac si omnia commemorem.Iam nunc quaeramus diligentius 
        quantum dat deus quod paulo ante distulimus, utrum et singula quaeque in trinitate persona possit et per se 
        ipsam non cum ceteris duabus dici deus aut magnus aut sapiens aut uerus aut omnipotens aut iustus et si quid 
        aliud de deo dici potest, non relatiue sed ad se ipsum, an uero non dicantur ista nisi cum trinitas 
        intellegitur. Hoc enim quaestionem facit quia scriptum est: Christum dei uirtutem et dei sapientiam, utrum 
        ita sit pater sapientiae atque uirtutis suae ut hac sapientia sapiens sit quam genuit et hac uirtute potens 
        quam genuit, et quia semper potens et sapiens, semper genuit uirtutem et sapientiam. Dixeramus enim si ita 
        est cur non et magnitudinis suae pater sit qua magnus est et bonitatis qua bonus et iustitiae qua iustus 
        et alia si qua sunt. Aut si haec omnia pluribus uocabulis in eadem sapientia et uirtute intelleguntur ut 
        ea sit magnitudo quae uirtus, ea bonitas quae sapientia, et ea rursus sapientia quae uirtus sicut iam tractauimus, 
        meminerimus cum aliquid horum nomino sic accipiendum esse ac si omnia commemorem.Iam nunc quaeramus diligentius 
        quantum dat deus quod paulo ante distulimus, utrum et singula quaeque in trinitate persona possit et per se 
        ipsam non cum ceteris duabus dici deus aut magnus aut sapiens aut uerus aut omnipotens aut iustus et si quid 
        aliud de deo dici potest, non relatiue sed ad se ipsum, an uero non dicantur ista nisi cum trinitas intellegitur. 
        Hoc enim quaestionem facit quia scriptum est: Christum dei uirtutem et dei sapientiam, utrum ita sit pater 
        sapientiae atque uirtutis suae ut hac sapientia sapiens sit quam genuit et hac uirtute potens quam genuit, 
        et quia semper potens et sapiens, semper genuit uirtutem et sapientiam. Dixeramus enim si ita est cur non et 
        magnitudinis suae pater sit qua magnus est et bonitatis qua bonus et iustitiae qua iustus et alia si qua sunt. 
        Aut si haec omnia pluribus uocabulis in eadem sapientia et uirtute intelleguntur ut ea sit magnitudo quae uirtus, 
        ea bonitas quae sapientia, et ea rursus sapientia quae uirtus sicut iam tractauimus, meminerimus cum aliquid 
        horum nomino sic accipiendum esse ac si omnia commemorem.Iam nunc quaeramus diligentius quantum dat deus quod 
        paulo ante distulimus, utrum et singula quaeque in trinitate persona possit et per se ipsam non cum ceteris 
        duabus dici deus aut magnus aut sapiens aut uerus aut omnipotens aut iustus et si quid aliud de deo dici potest, 
        non relatiue sed ad se ipsum, an uero non dicantur ista nisi cum trinitas intellegitur. Hoc enim quaestionem 
        facit quia scriptum est: Christum dei uirtutem et dei sapientiam, utrum ita sit pater sapientiae atque uirtutis 
        suae ut hac sapientia sapiens sit quam genuit et hac uirtute potens quam genuit, et quia semper potens et 
        sapiens, semper genuit uirtutem et sapientiam. Dixeramus enim si ita est cur non et magnitudinis suae pater sit 
        qua magnus est et bonitatis qua bonus et iustitiae qua iustus et alia si qua sunt. Aut si haec omnia pluribus 
        uocabulis in eadem sapientia et uirtute intelleguntur ut ea sit magnitudo quae uirtus, ea bonitas quae sapientia, 
        et ea rursus sapientia quae uirtus sicut iam tractauimus, meminerimus cum aliquid horum nomino sic accipiendum 
        esse ac si omnia commemorem.Iam nunc quaeramus diligentius quantum dat deus quod paulo ante distulimus, utrum et 
        singula quaeque in trinitate persona possit et per se ipsam non cum ceteris duabus dici deus aut magnus aut 
        sapiens aut uerus aut omnipotens aut iustus et si quid aliud de deo dici potest, non relatiue sed ad se ipsum, 
        an uero non dicantur ista nisi cum trinitas intellegitur. Hoc enim quaestionem facit quia scriptum est: Christum 
        dei uirtutem et dei sapientiam, utrum ita sit pater sapientiae atque uirtutis suae ut hac sapientia sapiens sit 
        quam genuit et hac uirtute potens quam genuit, et quia semper potens et sapiens, semper genuit uirtutem et 
        sapientiam. Dixeramus enim si ita est cur non et magnitudinis suae pater sit qua magnus est et bonitatis qua 
        bonus et iustitiae qua iustus et alia si qua sunt. Aut si haec omnia pluribus uocabulis in eadem sapientia et 
        uirtute intelleguntur ut ea sit magnitudo quae uirtus, ea bonitas quae sapientia, et ea rursus sapientia quae 
        uirtus sicut iam tractauimus, meminerimus cum aliquid horum nomino sic accipiendum esse ac si omnia commemorem.
      </p>
		</TextContainer>
    <MediaContainer className='player-wrapper'> Jostain syysta mediaContainer ei toimi niin kuin pitäisi kuva katso 
    esimerkki https://jsfiddle.net/e6w3rtj1/ ja vertaa mikä menee pieleen jotain tekemistä containereiden kanssa.
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=mo4qTH-VYGM'
        width='100%'
        height='100%'
      />
    </MediaContainer>
	</div>
	)