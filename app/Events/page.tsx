import { Button } from "@/components/ui/button"
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import './page.css'
import Image from 'next/image'
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function events() {
    const events = [
        {
            path: '/kcorner', value: 'K Corner', img: require('./kcorner.png'),
            edesc: " Team can have maximum of 2 Participants.Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "Topic should be technical and educational oriented.Maximum 20 slides are required.Explanation time is minimum 10 Minutes.Preliminaries will be conducted.Practical sessions are also allowed.Participants should bring their own Laptop.Explanation must be in English",
            staff:"Dr.S.Babu",
            desg:"Staff In-Charge",
            staff_cell:"tel:9444275366",
            event_cord:"Pavatharani K",
            cord_desg:"Co-ordinator",
            cord_cell:"tel:9524433829",
        },
        {
            path: '/softwaredebugging', value: 'Software Debugging', img: require('./bug.png'),
            edesc: "One participant per team.Certificates will be provided for all participants.Fisrt and second prizes are awarded based on judgment.Students have to maintain a decent Dress code",
            erules: "This round consists 20 questions.Time Duration 20 mints.Maximum numbers of outputs should be given and the respective logics must be answered.The Best Performances are promoted for GRAND FINALE",
            staff:"Mr.M.Krishnamoorthy",
            desg:"Staff In-Charge",
            staff_cell:"tel:9443308792",
            event_cord:"Sruthi S",
            cord_desg:"Co-ordinator",
            cord_cell:"tel:7338999323",
        },
        {
            path: '/paperpresentation', value: 'Paper Presentation', img: require('./paperpresentation.jpg'),
            edesc: "Team can have maximum of 2 Participants.Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "The Paper Submitted will have to be presented durning the event.Hard copies of the same are to be submitted before presentation.The Teams will get 7 minutes to presents their paper.It will be followed by a question and answer session for the next 3 Minutes.The Participants will have to present their papers in MS-Power Point format only.Violation of any rule can result in rejection of paper.The Organizers reserve the right to change/update the rules of the contest at any point of time and will do their best to inform to participants of the same.However ,it is ultimately the responsibility of the teams to keep themselves updated",
            staff:"Dr.S.Prakasam",
            desg:"Staff In-Charge",
            staff_cell:"9944902315",
            event_cord:"Dinesh D",
            cord_desg:"Co-ordinator",
            cord_cell:"9677308181",
        },
        {
            path: '/posterpresentation', value: 'Poster Presentation', img: require('./posterpresentation.png'),
            edesc: "Team can have maximum of 2 Participants.Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "Poster size must be 40*60.Make theme on it and collect information, pictures and make your own art clips.Bring out your creativity by arranging your theme on a chart.Poster explanation time is of 5mins.Every poster should be presented technically",
            staff:"Dr.K.Srinivasan",
            desg:"Staff In-Charge",
            staff_cell:"tel:",
            event_cord:"",
            cord_desg:"Co-ordinator",
            cord_cell:"tel:",
        },
        {
            path: '/groupdiscussion', value: 'Group Discussion', img: require('./gd.png'),
            edesc: "",
            erules: "",
            staff:"Dr.M.Kannan",
            desg:"Staff In-Charge",
            staff_cell:"tel:9443690287",
            event_cord:"Vignesh S",
            cord_desg:"Co-ordinator",
            cord_cell:"tel:6383841679",
        },
        {
            path: '/mockinterview', value: 'Mock Interview', img: require('./mi.jpg'),
            edesc: "Number of participants per team: 2.Certificates will be provided for all participants.First and second prizes are awarded based on judgment.Decent Dress code has to be maintained by the students",
            erules: "Participants go through under the HR interview.The Topics for HR interview will be from current affairs and technology trends .Resume is necessary for the HR interview",
            staff:"Dr.N.R.Ananthanarayanan",
            desg:"Staff In-Charge",
            staff_cell:"tel:",
            event_cord:"Bharathipriyan M",
            cord_desg:"Co-ordinator",
            cord_cell:"tel:6385301623",
        },
        {
            path: '/quiz', value: 'Quiz', img: require('./quiz.jpg'),
            edesc: "Team can have maximum of 2 Participants.Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "In case of Tie between the teams three or more questions will be asked.Eligible candidates can only participate in other rounds.First Round is based on historical places.Second Round is based on lateral thinking.Third Round is based on Tagline.Judges decision will be treated as final .Team will be disqualified on vulgarity or any obscene in the performance",
            staff:"Dr.T.Nirmal Raj",
            desg:"Staff In-Charge",
            staff_cell:"tel:9498028711",
            event_cord:"Monika D",
            cord_desg:"Co-ordinator",
            cord_cell:"tel:6379016986",
        },
        {
            path: '/shortfilm', value: 'Short Film', img: require('./shortfilm.jpg'),
            edesc: "Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "The time duration allocated for short film will be 10 minutes.The story or concept of this film should be good and keep non-violence.Judge's decision will be treated as final.Judgement will be based on the clarity of acting, thoughts, humor, expressions and screenplay.Team will be disqualified on vulgarity or any obscene in the performance.Language preferences: English or Tamil",
            staff:"Mr.M.Saravanan",
            desg:"Staff In-Charge",
            staff_cell:"tel:9842038898",
            event_cord:"Thulasingam D",
            cord_desg:"Co-ordinator",
            cord_cell:"tel:6380580277",
        },
    ];
    return (
        <div className="back">
        <div className="card">
            {events.map((item, idx) => (
                <Card key={idx} className="card-grid">
                    <CardHeader>
                        <Image
                            src={item.img}
                            width={500}
                            height={500}
                            alt={item.value}
                            className="img_event"
                        />
                        <CardTitle>{item.value}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="btn_detail">View Details</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-800" id="dialog">
                                <DialogHeader>
                                    <DialogTitle>{item.value}</DialogTitle>
                                    <DialogDescription>Event Details</DialogDescription>
                                </DialogHeader>
                                <Separator />
                                <div className="grid gap-2 py-2">
                                    <div className="grid grid-items-center gap-4">
                                        <DialogDescription>Event Description :</DialogDescription>
                                        <Separator />
                                        <div className="text-size-small text-black space-y-2 overflow-y-auto max-h-[200px]">
                                            {item.edesc && item.edesc.split(".").map((sentence, index) => (
                                                <p key={sentence}>{index + 1}. {sentence}.</p>
                                            ))}
                                        </div>
                                        <DialogDescription>Event Rules :</DialogDescription>
                                        <Separator />
                                        <div className="text-size-small text-black space-y-2 overflow-y-auto max-h-[200px]">
                                            {item.erules && item.erules.split(".").map((sentence, index) => (
                                                <p key={sentence}>{index + 1}. {sentence}.</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid-row gap-2 px-2">
                                    <Badge className="badge_coord" variant="outline">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" alt="SCSVMV" />
                                        </Avatar>
                                       &emsp;
                                       <div>
                                       <br/>
                                        {item.event_cord} <br />     
                                            <small> Event Co-Ordinator</small> 
                                        </div>&emsp;&emsp;&emsp;&emsp;&emsp;
                                        <Link href={item.cord_cell}>
                                        <PhoneCall className="w-4 trin-trin" /></Link>
                                    </Badge>
                                    <Badge className="badge_coord" variant="outline">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" alt="SCSVMV" />
                                        </Avatar>
                                       &emsp;
                                       <div>
                                            <br/>
                                            {item.staff}
                                             <br />     
                                            <small>{item.desg}</small> 
                                        </div> &emsp;&emsp;&emsp;&emsp;&emsp;
                                        <Link href={item.staff_cell}>
                                        <PhoneCall className="w-4 trin-trin" /></Link>
                                    </Badge>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </CardFooter>

                </Card>
            ))}
        </div>
        </div>
    )
}