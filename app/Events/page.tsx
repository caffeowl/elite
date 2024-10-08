import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
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
            erounds: "First Round:.This round consists of 20 questions.Time duration: 20 minutes.Maximum numbers of outputs should be given, and the respective logics must be answered.The best performances are promoted for GRAND FINALE.Final Round:.5 programs are given to individuals on the spot.Time duration: 45 minutes.The participants who debugged the maximum number of programs will be considered as best performer.Best performances are rewarded",
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
            erules: "Team can have maximum of 2 participants.First and Second prizes are awarded based on judgment.Students have to maintain a decent Dress code.Work should be original and in the specified format.Registered candidates are directed to mail the complete paper in IEEE format on or before 3th October 2024 to (elite mail id ) with <paper title> in the Subject field of the mail.Full paper must be submitted in IEEE format only and should not exceed 6 pages.Shortlisted candidates will be informed by E-Mail ID or by Mobile by 6th October 2024 and they would have to send reply confirming their participation on or before 07th October 2024.The paper which is already published in anywhere will not be qualified.The selected candidates should submit a soft copy and hard copy of the paper (2 copies) with abstract at the time of presentation. (in A4 sheets not exceeding ten pages - including references, tables and figures).Decision of the Judges and the event heads shall be treated as final and binding on all and cannot be contested.Directly copying from the internet is strongly discouraged and will not be entertained",
            p_rules: "The paper submitted will have to be presented during the event.The participants have to present their papers in Power Point (ppt/pptx) format only.The Teams will get 7 minutes to present their paper.It will be followed by a question and answer session for the next 3 Minutes.The participants will have to present their papers in MS-Power Point (ppt) format only.The organizers reserve the right to change/update the rules of the contest at any point of time and will do their best to inform to participants of the same. However, it is ultimately the responsibility of the teams to keep themselves updated",
            staff: "Dr.V.Ramesh",
            desg: "Staff In-Charge",
            staff_cell: "tel:9952494214",
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
            erules: "Only registered students are allowed to participate in Group Discussion.Participants can range from 7 to 12 in a group based on the number of the students registered. Average duration of the GD is 30 minutes.Sometimes, the panelist or judges can extend the discussion for more than 30 minutes. They can also end the discussion in between.Process of GD may repeat to filter the best speakers.Result will be announced by the Judge and it is the final decision",
            proc:"The process of a Group Discussion starts with the announcement of the topic. The given topic could be technical, factual, or case study.Before beginning with the discussion, the preparation time of 2 to 3 minutes is given. The time can also extend in case of a long case statement.Any participant in the group can initiate the discussion. After the lead participant, anyone in the group can continue the discussion. Similarly, everyone gets the chance to speak. One after another, participants in the group expresses their views on the given topic.It ends when the panelist stops the discussion or may ask one or more than one participant to summarize the GD. Whenever you are asked for the summary, remember to cover the discussed points. The summary cannot include the words that were not part of the discussion. The participants that were quite among the discussion are generally asked to summarize it, which is a good opportunity to present their views. But, it does not mean that everyone should be quite. The summary should include the essential discussed points and the conclusion of the discussion.The final scores are calculated. Based on the performance of each participant, the judge will give the final result and it is the final decision",
            staff: "Dr.N.R.Ananthanarayanan",
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
            erules: "The date and timings of the mock is given by the experts according to their feasibility and the interviews are conducted according to those timings.Mock interviews are conducted for the registered students only and it is offline mode.The order of students selected for panel is based upon CGPA or the opinion of the experts or the coordinators.Students have to bring their resume and other relevant documents else not permit to attend the mock interview.Strictly follow the dress code.If the students are unable to attend the mock interview due to any reason, they have to intimate earliest, no more chance will be provide further.Result will be announced by the Judge and it is the final decision",
            staff: "Dr.M.Kannan",
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
            erules: "Number of Nodes per Network.All participating Nodes will be certified, with participation certificate.Only two successful Networks are selected by the Administrator.Any Wi-Fi can register on the particular network ON-SPOT for free.The nodes can be registered in advance by visiting our website.Number of rounds: 3.The network which has proper connectivity with higher speed will be given priority to update for further rounds",
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
                                            <DialogDescription>Rules & Regulations<br/><br/><Link href="mailto:elite2k24@kanchiuniv.ac.in">Mail for submission as per event rules : elite2k24@kanchiuniv.ac.in</Link></DialogDescription>
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

                                            {item.p_rules && ( // Check if erules exists
                                                <div>
                                                    <DialogDescription>Presentation Rules :</DialogDescription>
                                                    <Separator />
                                                    <div className="text-size-small text-black space-y-2 overflow-y-auto max-h-[200px]">
                                                        {item.p_rules && item.p_rules.split(".").map((sentence, index) => (
                                                            <p key={sentence}>{index + 1}. {sentence}.</p>
                                                        ))}
                                                    </div>
                                                    </div>

                                            )}
                                            {item.proc && ( // Check if process exists
                                                <div>
                                                    <DialogDescription>Process :</DialogDescription>
                                                    <Separator />
                                                    <div className="text-size-small text-black space-y-2 overflow-y-auto max-h-[200px]">
                                                        {item.proc && item.proc.split(".").map((sentence, index) => (
                                                            <p key={sentence}>{index + 1}. {sentence}.</p>
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