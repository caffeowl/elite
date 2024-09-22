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
            erules: "Topic should be technical and educational oriented.Maximum 20 slides are required.Explanation time is minimum 10 Minutes.Preliminaries will be conducted.Practical sessions are also allowed.Participants should bring their own Laptop.Explanation must be in English"
        },
        {
            path: '/softwaredebugging', value: 'Software Debugging', img: require('./bug.png'),
            edesc: "One participant per team.Certificates will be provided for all participants.Fisrt and second prizes are awarded based on judgment.Students have to maintain a decent Dress code",
            erules: "This round consists 20 questions.Time Duration 20 mints.Maximum numbers of outputs should be given and the respective logics must be answered.The Best Performances are promoted for GRAND FINALE",
        },
        {
            path: '/paperpresentation', value: 'Paper Presentation', img: require('./paperpresentation.jpg'),
            edesc: "Team can have maximum of 2 Participants.Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "The Paper Submitted will have to be presented durning the event.Hard copies of the same are to be submitted before presentation.The Teams will get 7 minutes to presents their paper.It will be followed by a question and answer session for the next 3 Minutes.The Participants will have to present their papers in MS-Power Point format only.Violation of any rule can result in rejection of paper.The Organizers reserve the right to change/update the rules of the contest at any point of time and will do their best to inform to participants of the same.However ,it is ultimately the responsibility of the teams to keep themselves updated",
        },
        {
            path: '/posterpresentation', value: 'Poster Presentation', img: require('./posterpresentation.png'),
            edesc: "Team can have maximum of 2 Participants.Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "Poster size must be 40*60.Make theme on it and collect information, pictures and make your own art clips.Bring out your creativity by arranging your theme on a chart.Poster explanation time is of 5mins.Every poster should be presented technically",
        },
        {
            path: '/groupdiscussion', value: 'Group Discussion', img: require('./gd.png'),
            edesc: "",
            erules: "",
        },
        {
            path: '/mockinterview', value: 'Mock Interview', img: require('./mi.jpg'),
            edesc: "Number of participants per team: 2.Certificates will be provided for all participants.First and second prizes are awarded based on judgment.Decent Dress code has to be maintained by the students",
            erules: "Participants go through under the HR interview.The Topics for HR interview will be from current affairs and technology trends .Resume is necessary for the HR interview",
        },
        {
            path: '/quiz', value: 'Quiz', img: require('./quiz.jpg'),
            edesc: "Team can have maximum of 2 Participants.Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "In case of Tie between the teams three or more questions will be asked.Eligible candidates can only participate in other rounds.First Round is based on historical places.Second Round is based on lateral thinking.Third Round is based on Tagline.Judges decision will be treated as final .Team will be disqualified on vulgarity or any obscene in the performance",
        },
        {
            path: '/shortfilm', value: 'Short Film', img: require('./shortfilm.jpg'),
            edesc: "Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "The time duration allocated for short film will be 10 minutes.The story or concept of this film should be good and keep non-violence.Judge's decision will be treated as final.Judgement will be based on the clarity of acting, thoughts, humor, expressions and screenplay.Team will be disqualified on vulgarity or any obscene in the performance.Language preferences: English or Tamil",
        },
    ];
    return (
        <div className="card">
            {events.map((item, idx) => (
                <Card key={idx} className="card-grid">
                    <CardHeader>
                        <Image
                            src={item.img}
                            width={300}
                            height={150}
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
                                    <div className="grid-column gap-4 py-2">
                                    <Badge className="badge_coord" variant="outline">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" alt="SCSVMV" />
                                        </Avatar>
                                       &emsp;
                                       <div>
                                       <br/>
                                            PAVATHARANI K <br />     
                                            <small>Co-Ordinator</small> &emsp;&emsp;&emsp;&emsp;&emsp;
                                        </div>
                                        <Link href="tel:9524433829">
                                        <PhoneCall className="w-4 trin-trin" /></Link>
                                    </Badge>
                                    <Badge className="badge_coord" variant="outline">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" alt="SCSVMV" />
                                        </Avatar>
                                       &emsp;
                                       <div>
                                            <br/>
                                            PAVATHARANI K <br />     
                                            <small>Co-Ordinator</small> &emsp;&emsp;&emsp;&emsp;&emsp;
                                        </div>
                                        <Link href="tel:9524433829">
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
    )
}