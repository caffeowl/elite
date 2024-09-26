import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
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
            erules: "Team can have maximum of 2 participants.Certificates will be provided for all participants.First and second prizes are awarded based on judgment.Topic should be technical and educational oriented.Maximum 20 slides are required.Explanation time is minimum 10 minutes.Preliminaries will be conducted.Practical sessions are also allowed.Participants should bring their own Laptop.Explanation must be in English",

            staff: "Dr.S.Babu",
            desg: "Staff In-Charge",
            staff_cell: "tel:9444275366",
            event_cord: "Pavatharani K",
            cord_desg: "Co-ordinator",
            cord_cell: "tel:9524433829",
            av_image: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?w=740&t=st=1727328114~exp=1727328714~hmac=9087a42cbd353fdb89de2d0e79e274b7adcbdb893633e8b1cde1c758e4abfcbf",
            prof_img: "https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=740",
        },
        {
            path: '/softwaredebugging', value: 'Software Debugging', img: require('./bug.png'),
            erules: "One participant per team.Certificates will be provided for all participants.First and second prizes are awarded based on judgment.Students have to maintain a decent dress code",
            erounds: "First Round:.This round consists of 20 questions.Time duration: 20 minutes.Maximum numbers of outputs should be given, and the respective logics must be answered.The best performances are promoted for GRAND FINALE.Final Round:.5 bugged programs are given to individuals on the spot.Time duration: 45 minutes.The participants who debugged the maximum number of programs will be considered as best performer.Best performances are rewarded",
            staff: "Mr.M.Krishnamoorthy",
            desg: "Staff In-Charge",
            staff_cell: "tel:9443308792",
            event_cord: "Sruthi S",
            cord_desg: "Co-ordinator",
            cord_cell: "tel:7338999323",
            av_image: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?w=740&t=st=1727328114~exp=1727328714~hmac=9087a42cbd353fdb89de2d0e79e274b7adcbdb893633e8b1cde1c758e4abfcbf",
            prof_img: "https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=740",
        },
        {
            path: '/paperpresentation', value: 'Paper Presentation', img: require('./paperpresentation.jpg'),
            erules: "",
            staff: "Dr.S.Prakasam",
            desg: "Staff In-Charge",
            staff_cell: "9944902315",
            event_cord: "Dinesh D",
            cord_desg: "Co-ordinator",
            cord_cell: "9677308181",
            av_image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1727327968~exp=1727328568~hmac=c8183ab53b326464fd9b9d7825ba6f3107ff132b43d5a67e1f29c31986da37fc",
            prof_img: "https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=740",
        },
        {
            path: '/posterpresentation', value: 'Poster Presentation', img: require('./posterpresentation.png'),
            erules: "A team can have maximum of 2 participants.Certificates will be provided for all the participants.First and second prizes will be awarded based on the judgment.Poster size must be 40*60.Make theme on it and collect information, pictures and make your own art clips.Bring out your creativity by arranging your theme on a chart.Poster explanation time is of 5 minutes.Every poster should be presented technically",
            staff: "Dr.K.Srinivasan",
            desg: "Staff In-Charge",
            staff_cell: "tel:",
            event_cord: "Datchanamoorthy T",
            cord_desg: "Co-ordinator",
            cord_cell: "tel:6380279916",
            av_image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1727327968~exp=1727328568~hmac=c8183ab53b326464fd9b9d7825ba6f3107ff132b43d5a67e1f29c31986da37fc",
            prof_img: "https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=740",
        },
        {
            path: '/groupdiscussion', value: 'Group Discussion', img: require('./gd.png'),
            erules: "",
            staff: "Dr.M.Kannan",
            desg: "Staff In-Charge",
            staff_cell: "tel:9443690287",
            event_cord: "Jeeva",
            cord_desg: "Co-ordinator",
            cord_cell: "tel:9080185815",
            av_image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1727327968~exp=1727328568~hmac=c8183ab53b326464fd9b9d7825ba6f3107ff132b43d5a67e1f29c31986da37fc",
            prof_img: "https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=740",
        },
        {
            path: '/mockinterview', value: 'Mock Interview', img: require('./mi.jpg'),
            erules: " Certificates will be provided for all participants.First and second prizes are awarded based on judgment.Participants go through the HR interview.The topics for HR interview will be from current affairs and technology trends.Resume is necessary for the HR interview",
            staff: "Dr.N.R.Ananthanarayanan",
            desg: "Staff In-Charge",
            staff_cell: "tel:",
            event_cord: "Bharathipriyan M",
            cord_desg: "Co-ordinator",
            cord_cell: "tel:6385301623",
            av_image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1727327968~exp=1727328568~hmac=c8183ab53b326464fd9b9d7825ba6f3107ff132b43d5a67e1f29c31986da37fc",
            prof_img: "https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=740",
        },
        {
            path: '/quiz', value: 'Quiz', img: require('./quiz.jpg'),
            erounds: "Round 1: Entertainment Based Connection.Game name both indoor and outdoor.Mathematical operations.Letter Shuffle.Round 2: Technical.Picture merging only computer parts.Logo.Tags.Famous personality.Round 3: Think and ping.Proverb.Find the difference.Inventions and abbreviation.Allocation of time will be based on rounds.If any question is left out, it is passed to the next node, and marks will be given based on it.The rules will be subjected to change.For further queries and registration, contact: 9626371781",
            erules: "Number of Nodes per Network.All participating Nodes will be certified, with participation certificate.Only two successful Networks are selected by the Administrator.Any Wi-Fi can register on the particular network ON-SPOT for free.The nodes can be registered in advance by visiting our website (www.kanchiuniv.ac.in/csa/elite2K24).Number of rounds: 3.The network which has proper connectivity with higher speed will be given priority to update for further rounds",
            staff: "Dr.T.Nirmal Raj",
            desg: "Staff In-Charge",
            staff_cell: "tel:9498028711",
            event_cord: "Sowmiya R",
            cord_desg: "Co-ordinator",
            cord_cell: "tel:7550282730",
            av_image: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?w=740&t=st=1727328114~exp=1727328714~hmac=9087a42cbd353fdb89de2d0e79e274b7adcbdb893633e8b1cde1c758e4abfcbf",
            prof_img: "https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=740",
        },
        {
            path: '/shortfilm', value: 'Short Film', img: require('./shortfilm.jpg'),
            edesc: "Certificates will be provided for all participants.First and second prizes are awarded based on judgment",
            erules: "The time duration allocated for short film will be 10 minutes.The story or concept of this film should be good and keep non-violence.Judge's decision will be treated as final.Judgement will be based on the clarity of acting, thoughts, humor, expressions and screenplay.Team will be disqualified on vulgarity or any obscene in the performance.Language preferences: English or Tamil",
            staff: "Mr.M.Saravanan",
            desg: "Staff In-Charge",
            staff_cell: "tel:9842038898",
            event_cord: "Thilakkumar S",
            cord_desg: "Co-ordinator",
            cord_cell: "tel:6374156151",
            av_image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1727327968~exp=1727328568~hmac=c8183ab53b326464fd9b9d7825ba6f3107ff132b43d5a67e1f29c31986da37fc",
            prof_img: "https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=740",
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
                        <CardContent>
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
                                    <div className="grid gap-2 py-2 overflow-y-auto max-h-[600px]">
                                        <div className="grid grid-items-center gap-4">
                                            <DialogDescription>Rules & Regulations</DialogDescription>
                                            <Separator />
                                            <div className="text-size-small text-black space-y-2 overflow-y-auto max-h-[200px]">
                                                {item.erules && item.erules.split(".").map((sentence, index) => (
                                                    <p key={sentence}>{index + 1}. {sentence}.</p>
                                                ))}
                                            </div>
                                            {item.erounds && ( // Check if erules exists
                                                <div>
                                                    <DialogDescription>Rounds :</DialogDescription>
                                                    <Separator />
                                                    <div className="text-size-small text-black space-y-2 overflow-y-auto max-h-[200px]">
                                                        {item.erounds &&
                                                            item.erounds
                                                                .split(".")
                                                                .map((sentence, index) => (
                                                                    <p key={sentence}>
                                                                        {sentence.includes("Round") ? (
                                                                            <>
                                                                                <b>{sentence.replace(/^(\d+\.\s*)Round/, "$1")}</b>
                                                                                {sentence.split(".").slice(1).map((subSentence, subIndex) => (
                                                                                    <span key={subSentence}>{subIndex + 1}. {subSentence}</span>
                                                                                ))}
                                                                            </>
                                                                        ) : (
                                                                            `${index + 1}. ${sentence.replace(/\./g, ". ")}`
                                                                        )}
                                                                    </p>
                                                                ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="grid-row gap-2 px-2">
                                            <Badge className="badge_coord" variant="outline">
                                                <Avatar className="w-12 h-12">
                                                    <AvatarImage src={item.av_image} alt="SCSVMV" />
                                                </Avatar>
                                                &emsp;
                                                <div>
                                                    <br />
                                                    {item.event_cord} <br />
                                                    <small> Event Co-Ordinator</small>
                                                </div>&emsp;&emsp;&emsp;&emsp;&emsp;
                                                <Link href={item.cord_cell}>
                                                    <PhoneCall className="w-4 trin-trin" /></Link>
                                            </Badge>
                                            <Badge className="badge_coord" variant="outline">
                                                <Avatar className="w-12 h-12">
                                                    <AvatarImage src={item.prof_img} alt="SCSVMV" />
                                                </Avatar>
                                                &emsp;
                                                <div>
                                                    <br />
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
                        </CardContent>

                    </Card>
                ))}
            </div>
        </div>
    )
}