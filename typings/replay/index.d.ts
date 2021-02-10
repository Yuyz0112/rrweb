import { Timer } from './timer';
import { createPlayerService, createSpeedService } from './machine';
import { eventWithTime, playerConfig, playerMetaData, Handler } from '../types';
import './styles/style.css';
export declare class Replayer {
    wrapper: HTMLDivElement;
    iframe: HTMLIFrameElement;
    service: ReturnType<typeof createPlayerService>;
    speedService: ReturnType<typeof createSpeedService>;
    get timer(): Timer;
    config: playerConfig;
    private mouse;
    private mouseTail;
    private tailPositions;
    private emitter;
    private nextUserInteractionEvent;
    private legacy_missingNodeRetryMap;
    private treeIndex;
    private fragmentParentMap;
    private elementStateMap;
    private imageMap;
    private newDocumentQueue;
    constructor(events: Array<eventWithTime | string>, config?: Partial<playerConfig>);
    on(event: string, handler: Handler): this;
    setConfig(config: Partial<playerConfig>): void;
    getMetaData(): playerMetaData;
    getCurrentTime(): number;
    getTimeOffset(): number;
    play(timeOffset?: number): void;
    pause(timeOffset?: number): void;
    resume(timeOffset?: number): void;
    startLive(baselineTime?: number): void;
    addEvent(rawEvent: eventWithTime | string): void;
    enableInteract(): void;
    disableInteract(): void;
    private setupDom;
    private handleResize;
    private getCastFn;
    private rebuildFullSnapshot;
    private insertStyleRules;
    private attachDocumentToIframe;
    private collectIframeAndAttachDocument;
    private waitForStylesheetLoad;
    private preloadAllImages;
    private applyIncremental;
    private applyMutation;
    private applyScroll;
    private applyInput;
    private formatMessage;
    private getConsoleLogger;
    private legacy_resolveMissingNode;
    private moveAndHover;
    private drawMouseTail;
    private hoverElements;
    private isUserInteraction;
    private backToNormal;
    private storeState;
    private restoreState;
    private warnNodeNotFound;
    private warnCanvasMutationFailed;
    private debugNodeNotFound;
    private warn;
    private debug;
}
