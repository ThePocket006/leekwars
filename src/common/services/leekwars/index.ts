import {$baseHttp} from "@/common/services/leekwars/base.services";
import {User} from "@/common/model";
import {
    AiApi,
    AiFolderApi,
    ArticleApi,
    ChangelogApi,
    ChipApi,
    ComplexityApi,
    Configuration,
    ConstantApi,
    CountryApi,
    EncyclopediaApi,
    FarmerApi,
    FightApi,
    ForumApi,
    FunctionApi,
    GardenApi,
    GroupeApi,
    HatApi,
    HistoryApi,
    ItemApi,
    LangApi,
    LeekApi,
    LeekWarsApi,
    MarketApi,
    MessageApi,
    MessageReactionApi,
    NotificationApi,
    PompApi,
    PotionApi,
    RankingApi,
    ServiceApi,
    SummonApi,
    TalentApi,
    TeamApi,
    TeamCompositionApi,
    TestLeekApi,
    TestMapApi,
    TestScenarioApi,
    TournamentApi,
    TrophyApi,
    TrophyTemplateApi,
    WeaponApi
} from "@/common/api";
import {BASE_PATH} from "@/common/api/base";


class LeekServices {
    protected $http = $baseHttp
    protected configuration: Configuration | undefined;

    private data = {
        'zozorgate': {
            'login': 'zozorgate@jourrapide.com',
            'password': 'A_{WP]*_:VA?O7ZQ)[:9'
        }
        , 'johnjhernandez': {
            'login': 'johnjhernandez@jourrapide.com',
            'password': 'hy4@aKn$gwHUQ@5p'
        }
    }

    public api = (() => {
        return {
            "Ai": new AiApi(this.configuration, BASE_PATH, this.$http),
            "AiFolder": new AiFolderApi(this.configuration, BASE_PATH, this.$http),
            "Article": new ArticleApi(this.configuration, BASE_PATH, this.$http),
            "Changelog": new ChangelogApi(this.configuration, BASE_PATH, this.$http),
            "Chip": new ChipApi(this.configuration, BASE_PATH, this.$http),
            "Complexity": new ComplexityApi(this.configuration, BASE_PATH, this.$http),
            "Constant": new ConstantApi(this.configuration, BASE_PATH, this.$http),
            "Country": new CountryApi(this.configuration, BASE_PATH, this.$http),
            "Encyclopedia": new EncyclopediaApi(this.configuration, BASE_PATH, this.$http),
            "Farmer": new FarmerApi(this.configuration, BASE_PATH, this.$http),
            "Fight": new FightApi(this.configuration, BASE_PATH, this.$http),
            "Forum": new ForumApi(this.configuration, BASE_PATH, this.$http),
            "Function": new FunctionApi(this.configuration, BASE_PATH, this.$http),
            "Garden": new GardenApi(this.configuration, BASE_PATH, this.$http),
            "Groupe": new GroupeApi(this.configuration, BASE_PATH, this.$http),
            "Hat": new HatApi(this.configuration, BASE_PATH, this.$http),
            "History": new HistoryApi(this.configuration, BASE_PATH, this.$http),
            "Item": new ItemApi(this.configuration, BASE_PATH, this.$http),
            "Lang": new LangApi(this.configuration, BASE_PATH, this.$http),
            "Leek": new LeekApi(this.configuration, BASE_PATH, this.$http),
            "LeekWars": new LeekWarsApi(this.configuration, BASE_PATH, this.$http),
            "Market": new MarketApi(this.configuration, BASE_PATH, this.$http),
            "Message": new MessageApi(this.configuration, BASE_PATH, this.$http),
            "MessageReaction": new MessageReactionApi(this.configuration, BASE_PATH, this.$http),
            "Notification": new NotificationApi(this.configuration, BASE_PATH, this.$http),
            "Pomp": new PompApi(this.configuration, BASE_PATH, this.$http),
            "Potion": new PotionApi(this.configuration, BASE_PATH, this.$http),
            "Ranking": new RankingApi(this.configuration, BASE_PATH, this.$http),
            "Service": new ServiceApi(this.configuration, BASE_PATH, this.$http),
            "Summon": new SummonApi(this.configuration, BASE_PATH, this.$http),
            "Talent": new TalentApi(this.configuration, BASE_PATH, this.$http),
            "Team": new TeamApi(this.configuration, BASE_PATH, this.$http),
            "TeamComposition": new TeamCompositionApi(this.configuration, BASE_PATH, this.$http),
            "TestLeek": new TestLeekApi(this.configuration, BASE_PATH, this.$http),
            "TestMap": new TestMapApi(this.configuration, BASE_PATH, this.$http),
            "TestScenario": new TestScenarioApi(this.configuration, BASE_PATH, this.$http),
            "Tournament": new TournamentApi(this.configuration, BASE_PATH, this.$http),
            "Trophy": new TrophyApi(this.configuration, BASE_PATH, this.$http),
            "TrophyTemplate": new TrophyTemplateApi(this.configuration, BASE_PATH, this.$http),
            "Weapon": new WeaponApi(this.configuration, BASE_PATH, this.$http),
        }
    })()

    constructor() {
    }

    async auth(login: User | string, password?: string) {
        let user = new User()
        if (login instanceof User) {
            user = login
        } else {
            user.username = login
            user.password = password || ''
        }

        const $post = this.api.Farmer.farmerLoginTokenPostForm(user.username, user.password)
        // const $post = this.$http.post(
        //     `farmer/login-token`
        //     // , parseData({login: user.username, password: user.password}))
        //     , {login: user.username, password: user.password})

        $post.then(resp => {
            console.log('login - data', resp)
            // this.$http.interceptors.request.use(
            //     config => {
            //         config.headers['Authorization'] = `Bearer ${resp.data['token']}`
            //         return config
            //     }
            //     , error => Promise.reject(error)
            // )
        })
        return $post
    }

}

export const leekServices = new LeekServices()
